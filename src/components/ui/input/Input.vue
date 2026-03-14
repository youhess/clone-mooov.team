<script setup lang="ts">
import { useAttrs } from 'vue'

import { cn } from '@/lib/utils'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  class?: string
}>()

const attrs = useAttrs()
</script>

<template>
  <input
    v-bind="attrs"
    :class="
      cn(
        'flex h-12 w-full border-0 border-b border-black/18 bg-transparent px-0 pb-3 text-[15px] text-black outline-none transition-colors placeholder:text-black/70 hover:border-black/40 focus-visible:border-black',
        props.class,
      )
    "
  >
</template>