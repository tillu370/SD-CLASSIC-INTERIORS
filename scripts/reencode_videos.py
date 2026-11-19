import os
import subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FFMPEG = r"C:\Users\nr166\AppData\Local\Microsoft\WinGet\Links\ffmpeg.exe"
FFPROBE = r"C:\Users\nr166\AppData\Local\Microsoft\WinGet\Links\ffprobe.exe"

SLUGS = [
    "akkayapalem-dileep", "sujathanagar-karthik", "bheemili-akshay",
    "chodavaram-eswar-rao", "shivajipalem-srinivas-rao", "parawada-lokesh",
    "mvv-green-field-seetharam", "vizianagaram-shankar", "mvv-green-field-sp-rao",
    "yendada-gayathri-devi", "madhurawada-naveen-reddy", "skypark-premchand",
    "chodavaram-venkatesh", "parawada-suribabu",
]

MAX_SIZE_MB = 80


def get_dims(path):
    out = subprocess.run(
        [FFPROBE, "-v", "error", "-select_streams", "v:0", "-show_entries",
         "stream=width,height", "-of", "csv=p=0:s=x", path],
        capture_output=True, text=True, check=True,
    ).stdout.strip()
    w, h = out.split("x")
    return int(w), int(h)


def reencode(path):
    w, h = get_dims(path)
    landscape = w >= h
    tmp = path + ".tmp.mp4"
    if landscape:
        vf = "scale='min(1280,iw)':-2"
    else:
        vf = "scale=-2:'min(1280,ih)'"
    cmd = [
        FFMPEG, "-y", "-i", path,
        "-vf", vf, "-r", "24",
        "-c:v", "libx264", "-preset", "veryfast",
        "-b:v", "700k", "-maxrate", "900k", "-bufsize", "1400k",
        "-c:a", "aac", "-b:a", "96k",
        "-movflags", "+faststart",
        tmp,
    ]
    print("  encoding", path, w, h, "->", vf)
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    old_size = os.path.getsize(path)
    new_size = os.path.getsize(tmp)
    os.replace(tmp, path)
    print(f"    {old_size/1024/1024:.1f}MB -> {new_size/1024/1024:.1f}MB")


def main():
    for slug in SLUGS:
        for kind in ("walkthrough", "completed"):
            path = os.path.join(ROOT, "public", "projects", slug, f"{kind}.mp4")
            if not os.path.isfile(path):
                continue
            size_mb = os.path.getsize(path) / 1024 / 1024
            print(f"== {slug}/{kind}.mp4 ({size_mb:.1f}MB) ==")
            if size_mb <= MAX_SIZE_MB:
                print("  already small enough, skipping")
                continue
            reencode(path)


if __name__ == "__main__":
    main()
