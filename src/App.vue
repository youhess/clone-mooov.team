<script setup lang="ts">
import { ref } from 'vue'

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

    <footer class="h-[120px] border-t border-black/10 bg-white">
      <div
        class="flex h-full flex-wrap items-center gap-x-6 gap-y-2 px-4 text-[17px] leading-[1.2] tracking-[-0.02em] text-black/70 sm:px-6 lg:px-[2.4vw]"
      >
        <p
          v-for="item in legalLinks"
          :key="item"
        >
          {{ item }}
        </p>
      </div>
    </footer>

    <a
      href="#contact"
      class="fixed right-0 top-1/2 z-40 hidden h-[170px] w-[50px] -translate-y-1/2 bg-black text-white xl:flex xl:flex-col xl:items-center xl:justify-between xl:py-4"
    >
      <span class="text-[18px] font-semibold leading-none text-white">w.</span>
      <span class="writing-vertical text-[10px] uppercase tracking-[0.18em] text-white">Honors</span>
    </a>

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
