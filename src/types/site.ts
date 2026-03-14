export type HeroSceneKey = 'default' | 'design-motion' | 'film-vfx'

export interface NavChild {
  id: string
  label: string
  description: string
  href: string
  filter?: string
  scene?: HeroSceneKey
}

export interface NavItem {
  id: string
  label: string
  href: string
  scene?: HeroSceneKey
  children: NavChild[]
}

export interface HeroScene {
  key: HeroSceneKey
  eyebrow: string
  title: string[]
  source: string
  cta: string
}

export interface ProjectItem {
  id: string
  title: string
  category: string
  prompt: string
  note: string
}

export interface LinkGroup {
  title: string
  links: Array<{ label: string; href: string }>
}

export interface DrawerSection {
  title: string
  body: string
}