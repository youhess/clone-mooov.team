<script setup lang="ts">
import { ref } from 'vue'

import RightRail from '@/components/layout/RightRail.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import InfoDrawer from '@/components/overlays/InfoDrawer.vue'
import ShowreelDialog from '@/components/overlays/ShowreelDialog.vue'
import AboutHeadline from '@/components/sections/AboutHeadline.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import OfferSection from '@/components/sections/OfferSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import {
  drawerSections,
  footerGroups,
  heroScenes,
  legalLinks,
  navItems,
  offerColumns,
  projects,
  showreelUrl,
} from '@/data/site'
import type { HeroSceneKey } from '@/types/site'

const activeScene = ref<HeroSceneKey>('default')
const activeFilter = ref<string | null>(null)
const isShowreelOpen = ref(false)
const isDrawerOpen = ref(false)

function previewScene(scene: HeroSceneKey) {
  activeScene.value = scene
}

function setFilter(filter: string | null) {
  activeFilter.value = filter
}

function openShowreel() {
  isShowreelOpen.value = true
}

function openDrawer() {
  isDrawerOpen.value = true
}
</script>

<template>
  <div class="min-h-screen bg-[var(--page-bg)]">
    <SiteHeader
      :items="navItems"
      @scene-preview="previewScene"
      @toggle-drawer="openDrawer"
      @open-showreel="openShowreel"
      @filter-category="setFilter"
    />

    <main>
      <HeroSection
        :scenes="heroScenes"
        :active-scene="activeScene"
        @open-showreel="openShowreel"
        @open-drawer="openDrawer"
        @preview-scene="previewScene"
      />
      <AboutHeadline />
      <OfferSection :columns="offerColumns" />
      <ProjectsSection
        :items="projects"
        :active-filter="activeFilter"
      />
      <ContactSection :groups="footerGroups" />
    </main>

    <SiteFooter :items="legalLinks" />
    <RightRail />

    <ShowreelDialog
      v-model:open="isShowreelOpen"
      :iframe-src="showreelUrl"
    />
    <InfoDrawer
      v-model:open="isDrawerOpen"
      :sections="drawerSections"
      @open-showreel="openShowreel"
    />
  </div>
</template>