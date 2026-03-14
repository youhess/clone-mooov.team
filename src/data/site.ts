import type {
  DrawerSection,
  HeroScene,
  LinkGroup,
  NavItem,
  ProjectItem,
} from '@/types/site'

export const showreelUrl = 'https://player.vimeo.com/video/1005719535'

export const heroScenes: Record<HeroScene['key'], HeroScene> = {
  default: {
    key: 'default',
    eyebrow: 'Creative team',
    title: ['Design & Motion', 'Film & VFX'],
    source:
      'https://mooov.team/wp-content/uploads/2025/04/website-cover-1600x766-small.mp4',
    cta: 'Open project brief',
  },
  'design-motion': {
    key: 'design-motion',
    eyebrow: 'Broadcast systems',
    title: ['Design & Motion', 'Film & VFX'],
    source:
      'https://mooov.team/wp-content/uploads/2025/04/website-cover-adv-1600x766-small.mp4',
    cta: 'Explore motion pipeline',
  },
  'film-vfx': {
    key: 'film-vfx',
    eyebrow: 'Feature scale VFX',
    title: ['Design & Motion', 'Film & VFX'],
    source:
      'https://mooov.team/wp-content/uploads/2025/04/website-cover-cinematic-1600x766-small.mp4',
    cta: 'Review film work',
  },
}

export const navItems: NavItem[] = [
  {
    id: 'design-motion',
    label: 'Design & Motion',
    href: '#projects',
    scene: 'design-motion',
    children: [
      {
        id: 'broadcast',
        label: 'Broadcast design',
        description: 'Packages, show systems, motion identities.',
        href: '#projects',
        filter: 'TV screensaver',
        scene: 'design-motion',
      },
      {
        id: 'immersive',
        label: 'Immersive shows',
        description: 'Spatial staging, concept decks, live visuals.',
        href: '#contact',
        scene: 'design-motion',
      },
      {
        id: 'campaigns',
        label: 'Campaign motion',
        description: 'Launch trailers, social loops, branded edits.',
        href: '#projects',
        filter: 'Series',
        scene: 'design-motion',
      },
    ],
  },
  {
    id: 'film-vfx',
    label: 'Film & VFX',
    href: '#projects',
    scene: 'film-vfx',
    children: [
      {
        id: 'feature',
        label: 'Feature films',
        description: 'CG extension, compositing, cleanup and finals.',
        href: '#projects',
        filter: 'Film',
        scene: 'film-vfx',
      },
      {
        id: 'series',
        label: 'Series work',
        description: 'Long-form episodic pipelines with delivery support.',
        href: '#projects',
        filter: 'Series',
        scene: 'film-vfx',
      },
      {
        id: 'breakdown',
        label: 'Breakdowns',
        description: 'Shot studies and proof-of-quality reels.',
        href: '#projects',
        filter: 'Film',
        scene: 'film-vfx',
      },
    ],
  },
  {
    id: 'about',
    label: 'About',
    href: '#about',
    children: [
      {
        id: 'team',
        label: 'Team profile',
        description: 'Twenty years of multidisciplinary production.',
        href: '#about',
      },
      {
        id: 'method',
        label: 'How we work',
        description: 'Concept, budget control, production, delivery.',
        href: '#offer',
      },
      {
        id: 'contact-menu',
        label: 'Start a brief',
        description: 'Open the project drawer or jump to the form.',
        href: '#contact',
      },
    ],
  },
]

export const offerColumns = [
  [
    'We offer a full cycle of development and content creation for your product - from creative solutions to immersive shows and advertising, to visual effects for feature films and series. Our team gets involved at the early stages of the project launch and together with you develops a visual for your content.',
    'Thanks to our international experience, we create content at the peak of trends and to the highest industry standards.',
  ],
  [
    'We provide art support starting from the initial meeting, optimizing the budget and production schedule, guiding your project through all stages straight to release.',
  ],
]

export const projects: ProjectItem[] = [
  {
    id: 'klinicheskaya',
    title: '13 Klinicheskaya. Nachalo',
    category: 'Film',
    href: 'https://mooov.team/en/projects/13-slinical-season-2/',
    prompt:
      'cinematic ensemble poster, four serious actors in a shadowy hospital corridor, teal and ember lighting, premium streaming drama, high detail',
    videoSrc: 'https://mooov.team/wp-content/uploads/2026/02/kli_5sec_cover_v001.mp4',
    note: 'Feature campaign key art.',
  },
  {
    id: 'breakdown',
    title: 'Visual effects breakdown of scene from feature film',
    category: 'Film',
    href: 'https://mooov.team/en/projects/visual-effects-breakdown-of-scene-from-feature-film/',
    prompt:
      'close portrait of a determined man in a flat cap, destroyed archway framing him, warm dust and smoke, epic film breakdown poster',
    note: 'Sequence breakdown and compositing study.',
  },
  {
    id: 'biggest-moon',
    title: 'The Biggest Moon',
    category: 'Film',
    href: 'https://mooov.team/en/projects/samaya-bolshaya-luna/',
    prompt:
      'moonlit fantasy film poster, young man riding a motorcycle toward camera, silver wings and giant moon behind, cool blue cinematic glow',
    videoSrc: 'https://mooov.team/wp-content/uploads/2025/06/moon_cover.mp4',
    note: 'Moonlit fantasy launch artwork.',
  },
  {
    id: 'flying-ship',
    title: 'The Flying Ship',
    category: 'Film',
    href: 'https://mooov.team/en/projects/the-flying-ship/',
    prompt:
      'fantasy musical poster, ornate flying ship over golden clouds, royal family in bright costumes, magical pastel sky, richly detailed',
    videoSrc: 'https://mooov.team/wp-content/uploads/2025/02/krb_5_sec-1600x-small-1.mp4',
    note: 'Whimsical family fantasy illustration.',
  },
  {
    id: 'black-cloud',
    title: 'Black cloud',
    category: 'Series',
    href: 'https://mooov.team/en/projects/black-cloud/',
    prompt:
      'fashion-forward close-up portrait of a young woman drawing on paper, neon ring on finger, moody editorial lighting, premium series poster',
    videoSrc: 'https://mooov.team/wp-content/uploads/2024/01/zlo-5-sec-1600x-small.mp4',
    note: 'Character-led series campaign.',
  },
  {
    id: 'alcas-news',
    title: 'Alcas News',
    category: 'TV screensaver',
    href: 'https://mooov.team/en/projects/alcas-news/',
    prompt:
      'sleek horse and rider silhouette crossing glowing amber geometric set, modern broadcast opener frame, glossy reflections, dramatic contrast',
    videoSrc: 'https://mooov.team/wp-content/uploads/2023/10/5sec-cut-alk-news-1600x-small.mp4',
    note: 'Broadcast opener package.',
  },
]

export const footerGroups: LinkGroup[] = [
  {
    title: 'Company',
    links: [
      { label: 'Design & Motion', href: '#projects' },
      { label: 'Film & VFX', href: '#projects' },
      { label: 'About', href: '#about' },
      { label: 'Contacts', href: '#contact' },
    ],
  },
  {
    title: 'Contacts',
    links: [
      { label: 'info@mooov.team', href: 'mailto:info@mooov.team' },
      { label: 'Avenida D. Pedro I,', href: '#contact' },
      { label: '24 Apartamento 18 2510-451', href: '#contact' },
      { label: 'AMOREIRA, Obidos', href: '#contact' },
    ],
  },
  {
    title: 'Social',
    links: [
      { label: 'Behance', href: 'https://www.behance.net/mooovteam' },
      { label: 'Vimeo', href: 'https://vimeo.com/mooovteam' },
      { label: 'Facebook', href: 'https://www.facebook.com/mooov.team' },
    ],
  },
]

export const drawerSections: DrawerSection[] = [
  {
    title: 'Production scope',
    body: 'Creative direction, motion systems, compositing, CG supervision and delivery packaging across campaigns, series and feature films.',
  },
  {
    title: 'Project timing',
    body: 'Discovery in the first week, treatment and budget in the second, production blocks shaped around release dates and shot complexity.',
  },
  {
    title: 'Support',
    body: 'Art support from the first call to final release, including vendor alignment, schedule tuning and asset QA.',
  },
]

export const legalLinks = ['(c) Mooov, 2026', 'Privacy Policy', 'Site made in Catapulta']
