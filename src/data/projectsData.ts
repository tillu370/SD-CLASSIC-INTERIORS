import { PROJECT_MEDIA } from './projectsManifest';

export interface RenderImage {
  n: number;
  caption: string;
  w: number;
  h: number;
  tw: number;
  th: number;
}

export interface ProjectMedia {
  renders: RenderImage[];
  walkthrough: boolean;
  completed: boolean;
}

export interface ProjectItem {
  slug: string;
  title: string;
  location: string;
  renders: RenderImage[];
  walkthrough?: { src: string; poster: string };
  completed?: { src: string; poster: string };
  cover: string;
}

export interface CategoryPage {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  sections: Array<'renders' | 'walkthrough' | 'completed'>;
  projectSlugs: string[];
  inspiration?: boolean;
}

const PROJECT_META: Array<{ slug: string; title: string; location: string }> = [
  { slug: 'parawada-2bhk', title: 'Parawada 2BHK Residence', location: 'Parawada' },
  { slug: 'vizianagaram', title: 'Vizianagaram Residence', location: 'Vizianagaram' },
  { slug: 'mvv-green-field-i', title: 'MVV Green Field Residence I', location: 'MVV Green Field' },
  { slug: 'mvv-green-field-ii', title: 'MVV Green Field Residence II', location: 'MVV Green Field' },
  { slug: 'skypark-b5', title: 'Sky Park Apartment B-5', location: 'Sky Park' },
  { slug: 'bheemili', title: 'Bheemili Residence', location: 'Bheemili' },
];

const mediaBase = (slug: string) => `/projects/${slug}`;

export const PROJECTS: ProjectItem[] = PROJECT_META.map((meta) => {
  const media = PROJECT_MEDIA[meta.slug];
  const base = mediaBase(meta.slug);
  const renders = media?.renders ?? [];
  const coverRender =
    renders.find((r) => /hall|drawing|living/i.test(r.caption)) ?? renders[0];
  return {
    ...meta,
    renders,
    walkthrough: media?.walkthrough
      ? { src: `${base}/walkthrough.mp4`, poster: `${base}/walkthrough-poster.jpg` }
      : undefined,
    completed: media?.completed
      ? { src: `${base}/completed.mp4`, poster: `${base}/completed-poster.jpg` }
      : undefined,
    cover: coverRender
      ? `${base}/renders/${String(coverRender.n).padStart(2, '0')}.webp`
      : `${base}/walkthrough-poster.jpg`,
  };
});

export const renderSrc = (slug: string, n: number) =>
  `${mediaBase(slug)}/renders/${String(n).padStart(2, '0')}.webp`;
export const renderThumb = (slug: string, n: number) =>
  `${mediaBase(slug)}/renders/${String(n).padStart(2, '0')}-t.webp`;

const ALL_SLUGS = PROJECTS.map((p) => p.slug);

export const CATEGORY_PAGES: Record<string, CategoryPage> = {
  residential: {
    id: 'residential',
    title: 'Residential Interior Projects',
    eyebrow: 'Our Projects',
    description:
      'Homes and apartments planned around the way our clients live, from 3D design to the finished space.',
    sections: ['renders', 'walkthrough', 'completed'],
    projectSlugs: ALL_SLUGS,
  },
  visualizations: {
    id: 'visualizations',
    title: 'Interior Designs & Visualizations',
    eyebrow: 'Our Projects',
    description:
      'Realistic 3D renders and walkthroughs that let you experience a space before execution begins.',
    sections: ['renders', 'walkthrough'],
    projectSlugs: ALL_SLUGS,
  },
  commercial: {
    id: 'commercial',
    inspiration: true,
    title: 'Commercial Interior Projects',
    eyebrow: 'Our Projects',
    description: 'Professional, functional interiors for offices and commercial spaces.',
    sections: ['renders', 'walkthrough', 'completed'],
    projectSlugs: [],
  },
  turnkey: {
    id: 'turnkey',
    inspiration: true,
    title: 'Turnkey Projects',
    eyebrow: 'Our Projects',
    description: 'Complete interiors managed under one roof, from design to handover.',
    sections: ['renders', 'walkthrough', 'completed'],
    projectSlugs: [],
  },
  renovation: {
    id: 'renovation',
    title: 'Renovation Projects',
    eyebrow: 'Our Projects',
    description: 'Existing spaces redesigned with improved layouts and upgraded finishes.',
    sections: ['renders', 'walkthrough', 'completed'],
    projectSlugs: [],
  },
  civil: {
    id: 'civil',
    title: 'Civil Works',
    eyebrow: 'Our Projects',
    description: 'Civil work coordinated alongside interior and renovation projects.',
    sections: ['renders', 'walkthrough', 'completed'],
    projectSlugs: [],
  },
};
