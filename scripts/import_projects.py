import os
import re
import subprocess
import sys

import fitz
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FFMPEG = r"C:\Users\nr166\AppData\Local\Microsoft\WinGet\Links\ffmpeg.exe"

BASE = os.path.join(ROOT, "Completed Projects of Interiors-20261119T115159Z-1-001")

PROJECTS = [
    {
        "folder": "Dileep @ Akkayapalem",
        "slug": "akkayapalem-dileep",
        "title": "Akkayapalem Residence",
        "location": "Akkayapalem",
    },
    {
        "folder": "Karthik @ Sujathanagar",
        "slug": "sujathanagar-karthik",
        "title": "Sujathanagar Residence",
        "location": "Sujathanagar",
    },
    {
        "folder": "MR. AKSHAY GARU-BHEEMILI",
        "slug": "bheemili-akshay",
        "title": "Bheemili Residence (Akshay)",
        "location": "Bheemili",
    },
    {
        "folder": "MR. ESWAR RAO GARU_CHODAVARAM",
        "slug": "chodavaram-eswar-rao",
        "title": "Chodavaram Residence (Eswar Rao)",
        "location": "Chodavaram",
        "mode": "dedupe",
    },
    {
        "folder": "Mr. Srinivas Rao_SHIVAJI PALEM",
        "slug": "shivajipalem-srinivas-rao",
        "title": "Shivaji Palem Residence",
        "location": "Shivaji Palem",
        "mode": "trim_ends",
    },
    {
        "folder": "MR.LOKESH-PARAWADA",
        "slug": "parawada-lokesh",
        "title": "Parawada Residence (Lokesh)",
        "location": "Parawada",
    },
    {
        "folder": "MR.SEETHARAM GARU _MVV GREEN FIELD",
        "slug": "mvv-green-field-seetharam",
        "title": "MVV Green Field Residence (Seetharam)",
        "location": "MVV Green Field",
    },
    {
        "folder": "MR.SHANKAR -VIZIANAGARAM",
        "slug": "vizianagaram-shankar",
        "title": "Vizianagaram Residence (Shankar)",
        "location": "Vizianagaram",
    },
    {
        "folder": "MR.SP RAO - MVV GREEN FIELD",
        "slug": "mvv-green-field-sp-rao",
        "title": "MVV Green Field Residence (SP Rao)",
        "location": "MVV Green Field",
    },
    {
        "folder": "MRS. GAYATHRI DEVI_MK ONE_YENDADA",
        "slug": "yendada-gayathri-devi",
        "title": "Yendada Residence (Gayathri Devi)",
        "location": "Yendada",
        "mode": "trim_ends",
    },
    {
        "folder": "NAVEEN REDDY_MADHURAWADA",
        "slug": "madhurawada-naveen-reddy",
        "title": "Madhurawada Residence (Naveen Reddy)",
        "location": "Madhurawada",
    },
    {
        "folder": "PREMCHAND - SKYPARK",
        "slug": "skypark-premchand",
        "title": "Sky Park Residence (Premchand)",
        "location": "Sky Park",
    },
    {
        "folder": "Venkatesh @ Chodavaram",
        "slug": "chodavaram-venkatesh",
        "title": "Chodavaram Residence (Venkatesh)",
        "location": "Chodavaram",
        "mode": "trim_ends",
    },
    {
        "folder": "Suribabu @ Parawada",
        "slug": "parawada-suribabu",
        "title": "Parawada Duplex Residence (Suribabu)",
        "location": "Parawada",
    },
]

SKIP_CAPTIONS = {"", "THANK YOU"}
SKIP_PREFIXES = ("NOTE", "THANK")

ABBR_FIX = {
    "Tv": "TV",
    "T.v": "TV",
    "Mvv": "MVV",
    "Sp": "SP",
}


def find_files(proj_folder):
    roots = [
        os.path.join(BASE, "Completed Projects of Interiors"),
        os.path.join(BASE, "Completed Projects of Interiors-20261119T115159Z-1-002", "Completed Projects of Interiors"),
        os.path.join(BASE, "Completed Projects of Interiors-20261119T115159Z-1-003", "Completed Projects of Interiors"),
    ]
    pdf = walkthrough = completed = None
    for root in roots:
        pdir = os.path.join(root, proj_folder)
        if not os.path.isdir(pdir):
            continue
        for dirpath, _, filenames in os.walk(pdir):
            for f in filenames:
                full = os.path.join(dirpath, f)
                lower = f.lower()
                dl = dirpath.lower()
                if lower.endswith(".pdf") and pdf is None:
                    pdf = full
                elif lower.endswith(".mp4"):
                    if "after" in dl or "complet" in lower:
                        if completed is None:
                            completed = full
                    elif "walkthrough" in dl or "visualisation" in dl:
                        if walkthrough is None:
                            walkthrough = full
    return pdf, walkthrough, completed


def clean_caption(raw):
    first_line = raw.strip().splitlines()[0].strip() if raw.strip() else ""
    if not first_line:
        return None
    upper = first_line.upper()
    if upper in SKIP_CAPTIONS or upper.startswith(SKIP_PREFIXES):
        return None
    # normalize spacing, fix "T.V" -> "TV"
    first_line = first_line.replace("T.V", "TV").replace("T. V", "TV")
    first_line = re.sub(r"\s+", " ", first_line)
    words = first_line.split(" ")
    out_words = []
    for w in words:
        lw = w.lower()
        if "-" in w and "OPT" in w.upper():
            # e.g. OPT-1 -> Option 1
            m = re.match(r"opt-?(\d+)", lw, re.I)
            if m:
                out_words.append(f"(Option {m.group(1)})")
                continue
        tw = w.capitalize()
        tw = ABBR_FIX.get(tw, tw)
        out_words.append(tw)
    caption = " ".join(out_words)
    caption = caption.replace("Childerbedroom", "Children Bedroom").replace("Fourier", "Foyer")
    return caption


def pick_main_image(page):
    rect = page.rect
    page_area = rect.width * rect.height
    best = None
    best_score = -1
    for info in page.get_image_info(xrefs=True):
        x0, y0, x1, y1 = info["bbox"]
        w = x1 - x0
        h = y1 - y0
        ox0, oy0 = max(x0, rect.x0), max(y0, rect.y0)
        ox1, oy1 = min(x1, rect.x1), min(y1, rect.y1)
        overlap = max(0, ox1 - ox0) * max(0, oy1 - oy0)
        closeness = overlap / page_area if page_area else 0
        extra = (w * h - overlap)
        score = closeness - (extra / (page_area + 1)) * 0.3
        if score > best_score:
            best_score = score
            best = info
    return best


def save_render(im, out_dir, n):
    os.makedirs(out_dir, exist_ok=True)
    full_w = 1600
    full_h = round(im.height * (full_w / im.width))
    full = im.resize((full_w, full_h), Image.LANCZOS)
    full.save(os.path.join(out_dir, f"{n:02d}.webp"), "WEBP", quality=85)

    thumb_w = 640
    thumb_h = round(im.height * (thumb_w / im.width))
    thumb = im.resize((thumb_w, thumb_h), Image.LANCZOS)
    thumb.save(os.path.join(out_dir, f"{n:02d}-t.webp"), "WEBP", quality=82)
    return full_w, full_h, thumb_w, thumb_h


def extract_renders_trim_ends(pdf_path, out_dir):
    """No text layer; single image per page; first page is a cover, last is a closing slide."""
    import io
    doc = fitz.open(pdf_path)
    renders = []
    n = 0
    for i in range(1, len(doc) - 1):
        page = doc[i]
        infos = page.get_image_info(xrefs=True)
        if not infos:
            continue
        info = max(infos, key=lambda x: (x["bbox"][2] - x["bbox"][0]) * (x["bbox"][3] - x["bbox"][1]))
        try:
            base = doc.extract_image(info["xref"])
            im = Image.open(io.BytesIO(base["image"])).convert("RGB")
        except Exception as e:
            print("    skip page", i, "error", e)
            continue
        n += 1
        w, h, tw, th = save_render(im, out_dir, n)
        renders.append({"n": n, "caption": f"Interior View {n}", "w": w, "h": h, "tw": tw, "th": th})
    return renders


def extract_renders_dedupe(pdf_path, out_dir):
    """No text layer; multiple images per page; one image repeats across most pages (background/watermark)."""
    import io, hashlib
    doc = fitz.open(pdf_path)

    hash_count = {}
    page_images = []
    for i in range(len(doc)):
        page = doc[i]
        infos = page.get_image_info(xrefs=True)
        items = []
        for info in infos:
            try:
                base = doc.extract_image(info["xref"])
            except Exception:
                continue
            h = hashlib.md5(base["image"]).hexdigest()
            items.append((info, base, h))
            hash_count[h] = hash_count.get(h, 0) + 1
        page_images.append(items)

    threshold = max(2, int(len(doc) * 0.3))
    renders = []
    n = 0
    rect = doc[0].rect
    page_area = rect.width * rect.height
    for i, items in enumerate(page_images):
        candidates = [(info, base) for info, base, h in items if hash_count[h] < threshold]
        if not candidates:
            continue

        def score(pair):
            info, _ = pair
            x0, y0, x1, y1 = info["bbox"]
            w, h = x1 - x0, y1 - y0
            ox0, oy0 = max(x0, rect.x0), max(y0, rect.y0)
            ox1, oy1 = min(x1, rect.x1), min(y1, rect.y1)
            overlap = max(0, ox1 - ox0) * max(0, oy1 - oy0)
            closeness = overlap / page_area if page_area else 0
            extra = (w * h - overlap)
            return closeness - (extra / (page_area + 1)) * 0.3

        info, base = max(candidates, key=score)
        try:
            im = Image.open(io.BytesIO(base["image"])).convert("RGB")
        except Exception as e:
            print("    skip page", i, "error", e)
            continue
        n += 1
        w, h, tw, th = save_render(im, out_dir, n)
        renders.append({"n": n, "caption": f"Interior View {n}", "w": w, "h": h, "tw": tw, "th": th})
    return renders


def extract_renders(pdf_path, out_dir):
    os.makedirs(out_dir, exist_ok=True)
    doc = fitz.open(pdf_path)
    renders = []
    n = 0
    for i in range(len(doc)):
        page = doc[i]
        raw_text = page.get_text()
        caption = clean_caption(raw_text)
        if caption is None:
            continue
        info = pick_main_image(page)
        if info is None:
            continue
        xref = info["xref"]
        try:
            base = doc.extract_image(xref)
        except Exception as e:
            print("    skip page", i, "extract error", e)
            continue
        img_bytes = base["image"]
        try:
            im = Image.open(__import__("io").BytesIO(img_bytes)).convert("RGB")
        except Exception as e:
            print("    skip page", i, "decode error", e)
            continue
        n += 1
        full_w = 1600
        full_h = round(im.height * (full_w / im.width))
        full = im.resize((full_w, full_h), Image.LANCZOS)
        full.save(os.path.join(out_dir, f"{n:02d}.webp"), "WEBP", quality=85)

        thumb_w = 640
        thumb_h = round(im.height * (thumb_w / im.width))
        thumb = im.resize((thumb_w, thumb_h), Image.LANCZOS)
        thumb.save(os.path.join(out_dir, f"{n:02d}-t.webp"), "WEBP", quality=82)

        renders.append({
            "n": n,
            "caption": caption,
            "w": full_w, "h": full_h,
            "tw": thumb_w, "th": thumb_h,
        })
    return renders


def process_video(src, dst_mp4, dst_poster):
    os.makedirs(os.path.dirname(dst_mp4), exist_ok=True)
    with open(src, "rb") as fsrc, open(dst_mp4, "wb") as fdst:
        fdst.write(fsrc.read())
    subprocess.run(
        [FFMPEG, "-y", "-i", dst_mp4, "-vf", "thumbnail,scale='min(1280,iw)':-1",
         "-frames:v", "1", dst_poster],
        check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    )


def main():
    only = set(sys.argv[1:]) or None
    results = []
    for proj in PROJECTS:
        slug = proj["slug"]
        if only and slug not in only:
            continue
        print("====", slug, "(", proj["folder"], ")")
        pdf, walkthrough, completed = find_files(proj["folder"])
        proj_dir = os.path.join(ROOT, "public", "projects", slug)
        renders = []
        mode = proj.get("mode", "captioned")
        if pdf:
            if mode == "dedupe":
                renders = extract_renders_dedupe(pdf, os.path.join(proj_dir, "renders"))
            elif mode == "trim_ends":
                renders = extract_renders_trim_ends(pdf, os.path.join(proj_dir, "renders"))
            else:
                renders = extract_renders(pdf, os.path.join(proj_dir, "renders"))
            print("  renders:", len(renders))
        else:
            print("  NO PDF FOUND")

        has_walkthrough = False
        if walkthrough:
            process_video(
                walkthrough,
                os.path.join(proj_dir, "walkthrough.mp4"),
                os.path.join(proj_dir, "walkthrough-poster.jpg"),
            )
            has_walkthrough = True
            print("  walkthrough: OK")

        has_completed = False
        if completed:
            process_video(
                completed,
                os.path.join(proj_dir, "completed.mp4"),
                os.path.join(proj_dir, "completed-poster.jpg"),
            )
            has_completed = True
            print("  completed: OK")

        results.append({
            "slug": slug,
            "title": proj["title"],
            "location": proj["location"],
            "renders": renders,
            "walkthrough": has_walkthrough,
            "completed": has_completed,
        })

    # Emit TS snippets
    print("\n\n===== PROJECT_META entries (projectsData.ts) =====\n")
    for r in results:
        print(f"  {{ slug: '{r['slug']}', title: '{r['title']}', location: '{r['location']}' }},")

    print("\n\n===== PROJECT_MEDIA entries (projectsManifest.ts) =====\n")
    for r in results:
        print(f"  '{r['slug']}': {{")
        print(f"    walkthrough: {str(r['walkthrough']).lower()},")
        print(f"    completed: {str(r['completed']).lower()},")
        print("    renders: [")
        for rend in r["renders"]:
            cap = rend["caption"].replace("'", "\\'")
            print(f"      {{ n: {rend['n']}, caption: '{cap}', w: {rend['w']}, h: {rend['h']}, tw: {rend['tw']}, th: {rend['th']} }},")
        print("    ],")
        print("  },")


if __name__ == "__main__":
    main()
