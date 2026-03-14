<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  alt: string
  prompt: string
}>()

const imageSrc = computed(() => {
  const query = new URLSearchParams({
    prompt: props.prompt,
    size: '1200x1600',
  })

  return `https://aidp.juejin.cn/agentic/api/v1/tool/text2image?${query.toString()}`
})
</script>

<template>
  <img
    :src="imageSrc"
    :alt="props.alt"
    class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
    loading="lazy"
    referrerpolicy="no-referrer"
  >
</template>