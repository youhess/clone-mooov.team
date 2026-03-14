<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import { computed, ref } from 'vue'

import { useReveal } from '@/composables/useReveal'
import { cn } from '@/lib/utils'
import type { ProjectItem } from '@/types/site'

const props = defineProps<{
  project: ProjectItem
  featured: boolean
}>()

const { target, isVisible } = useReveal(0.22)
const videoElement = ref<HTMLVideoElement | null>(null)
const isPreviewActive = ref(false)
const isVideoVisible = ref(false)
const hasVideo = computed(() => Boolean(props.project.videoSrc))
const imageSrc = computed(() => {
  const query = new URLSearchParams({
    prompt: props.project.prompt,
    size: '1200x1600',
  })

  return `https://aidp.juejin.cn/agentic/api/v1/tool/text2image?${query.toString()}`
})

const cardClass = computed(() =>
  cn(
    'group block transition-all duration-500',
    isVisible.value ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
  ),
)

function setTarget(element: Element | ComponentPublicInstance | null) {
  target.value = element instanceof HTMLElement ? element : null
}

function startPreview() {
  if (!hasVideo.value || !videoElement.value) {
    return
  }

  isPreviewActive.value = true

  if (videoElement.value.readyState >= 2) {
    isVideoVisible.value = true
  }

  void videoElement.value
    .play()
    .then(() => {
      if (isPreviewActive.value) {
        isVideoVisible.value = true
      }
    })
    .catch(() => {
      isVideoVisible.value = false
    })
}

function stopPreview() {
  isPreviewActive.value = false
  isVideoVisible.value = false

  if (!videoElement.value) {
    return
  }

  videoElement.value.pause()
  videoElement.value.currentTime = 0
}

function syncVideoVisibility() {
  if (isPreviewActive.value) {
    isVideoVisible.value = true
  }
}
</script>

<template>
  <article
    :ref="setTarget"
    :class="cardClass"
  >
    <a
      :href="props.project.href"
      class="block no-underline"
      @mouseenter="startPreview"
      @mouseleave="stopPreview"
      @focus="startPreview"
      @blur="stopPreview"
    >
      <div
        :class="
          cn(
            'relative aspect-[1021/750] max-h-[750px] w-full max-w-[1021px] overflow-hidden bg-black/6',
            props.featured ? 'ring-1 ring-black/16' : '',
          )
        "
      >
        <img
          :src="imageSrc"
          :alt="props.project.title"
          class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
          loading="lazy"
          referrerpolicy="no-referrer"
        >
        <video
          v-if="props.project.videoSrc"
          ref="videoElement"
          :src="props.project.videoSrc"
          class="pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out"
          :class="isVideoVisible ? 'opacity-100' : 'opacity-0'"
          playsinline
          loop
          muted
          preload="metadata"
          aria-hidden="true"
          @canplay="syncVideoVisibility"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>
      <div class="flex flex-wrap items-baseline gap-x-4 gap-y-1 pt-3 text-[26px] leading-[1.18] tracking-[-0.02em]">
        <p>{{ props.project.title }}</p>
        <span class="text-[26px] text-black/46">{{ props.project.category }}</span>
      </div>
    </a>
  </article>
</template>
