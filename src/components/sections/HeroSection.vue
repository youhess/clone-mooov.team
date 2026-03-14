<script setup lang="ts">
import { computed } from 'vue'
import { Play } from 'lucide-vue-next'

import type { HeroScene, HeroSceneKey } from '@/types/site'

const props = defineProps<{
  scenes: Record<HeroSceneKey, HeroScene>
  activeScene: HeroSceneKey
}>()

const emit = defineEmits<{
  'open-showreel': []
  'open-drawer': []
  'preview-scene': [HeroSceneKey]
}>()

const scene = computed(() => props.scenes[props.activeScene])

const heroLinks: Array<{ label: string; key: HeroSceneKey }> = [
  { label: 'Design & Motion', key: 'design-motion' },
  { label: 'Film & VFX', key: 'film-vfx' },
]
</script>

<template>
  <section
    id="top"
    class="relative h-screen min-h-[820px] overflow-hidden border-b border-black/10 bg-[var(--page-bg)]"
  >
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0">
        <Transition
          name="hero-fade"
          mode="out-in"
        >
          <video
            :key="scene.key"
            class="h-full w-full object-cover"
            :src="scene.source"
            autoplay
            loop
            muted
            playsinline
          />
        </Transition>
        <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,14,14,0.02),rgba(14,14,14,0.18))]" />
      </div>
      <picture class="pointer-events-none absolute inset-0 z-10">
        <img
          src="/media/mask-video.svg"
          alt=""
          class="h-full w-full object-cover object-center"
        >
      </picture>
    </div>

    <div class="relative z-20 mx-auto flex h-full max-w-[1440px] flex-col px-4 pb-10 pt-[117px] sm:px-6 lg:px-8">
      <div class="flex-1">
        <div
          class="mt-[18vh] max-w-[700px] text-white"
          style="transform: translateX(var(--hero-title-offset-x));"
        >
          <div class="space-y-1 font-[var(--font-display)] leading-[0.94] tracking-[-0.05em]">
            <button
              v-for="link in heroLinks"
              :key="link.key"
              type="button"
              class="block text-left transition duration-300 hover:translate-x-1 hover:opacity-88"
              style="font-size: var(--hero-title-size); line-height: 0.94;"
              @mouseenter="emit('preview-scene', link.key)"
              @focus="emit('preview-scene', link.key)"
            >
              {{ link.label }}
            </button>
          </div>
        </div>

        <button
          type="button"
          class="absolute left-[52.2%] top-[49.8%] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/65 p-4 text-white transition hover:scale-105 hover:bg-white/8"
          @click="$emit('open-showreel')"
        >
          <Play class="h-9 w-9 fill-current stroke-[1.4]" />
        </button>
      </div>

      <div class="relative flex items-end justify-between gap-6 pb-5 text-white">
        <button
          type="button"
          class="absolute tracking-[-0.02em] text-black/80 transition hover:opacity-85"
          style="left: var(--hero-showreel-left); bottom: var(--hero-showreel-bottom); font-size: var(--hero-showreel-size); line-height: 1.1;"
          @click="$emit('open-showreel')"
        >
          Watch showreel
        </button>
      </div>
    </div>
  </section>
</template>