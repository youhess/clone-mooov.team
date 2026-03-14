<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import { computed } from 'vue'

import AiImage from '@/components/common/AiImage.vue'
import { useReveal } from '@/composables/useReveal'
import { cn } from '@/lib/utils'
import type { ProjectItem } from '@/types/site'

const props = defineProps<{
  project: ProjectItem
  featured: boolean
}>()

const { target, isVisible } = useReveal(0.22)

const cardClass = computed(() =>
  cn(
    'group block transition-all duration-500',
    isVisible.value ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
  ),
)

function setTarget(element: Element | ComponentPublicInstance | null) {
  target.value = element instanceof HTMLElement ? element : null
}
</script>

<template>
  <article
    :ref="setTarget"
    :class="cardClass"
  >
    <a
      href="#contact"
      class="block no-underline"
    >
      <div
        :class="
          cn(
            'relative aspect-[1021/750] max-h-[750px] w-full max-w-[1021px] overflow-hidden bg-black/6',
            props.featured ? 'ring-1 ring-black/16' : '',
          )
        "
      >
        <AiImage
          :alt="props.project.title"
          :prompt="props.project.prompt"
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