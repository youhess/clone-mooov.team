<script setup lang="ts">
import { computed } from 'vue'

import ProjectCard from '@/components/common/ProjectCard.vue'
import type { ProjectItem } from '@/types/site'

const props = defineProps<{
  items: ProjectItem[]
  activeFilter: string | null
}>()

const sortedProjects = computed(() => {
  if (!props.activeFilter) {
    return props.items
  }

  return [...props.items].sort((left, right) => {
    const leftScore = left.category === props.activeFilter ? 0 : 1
    const rightScore = right.category === props.activeFilter ? 0 : 1

    return leftScore - rightScore
  })
})
</script>

<template>
  <section
    id="projects"
    class="border-b border-black/10 bg-white py-12 md:py-16"
  >
    <div class="px-4 sm:px-6 lg:px-[2.4vw]">
      <div class="mb-10 grid grid-cols-1 gap-x-4 gap-y-3 lg:grid-cols-2">
        <h2 class="font-[var(--font-display)] text-[clamp(40px,3.8vw,64px)] leading-[0.98] tracking-[-0.05em]">
          Our projects
        </h2>
        <div class="lg:self-center">
          <p class="text-[23px] leading-[1.1] tracking-[-0.02em] text-[#1E1E1E]">
            2022 — 2026
          </p>
          <p
            v-if="props.activeFilter"
            class="mt-2 text-black"
          >
            Filter: {{ props.activeFilter }}
          </p>
        </div>
      </div>

      <div class="flex flex-wrap gap-x-4 gap-y-8 lg:gap-y-12">
        <div
          v-for="project in sortedProjects"
          :key="project.id"
          class="w-full lg:w-[calc(50%-0.5rem)]"
        >
          <ProjectCard
            :project="project"
            :featured="props.activeFilter === project.category"
          />
        </div>
      </div>
    </div>
  </section>
</template>