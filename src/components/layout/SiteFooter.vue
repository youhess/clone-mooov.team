<script setup lang="ts">
const props = defineProps<{
  items: string[]
}>()
</script>

<template>
  <footer class="h-[120px] border-t border-black/10 bg-white">
    <div
      class="flex h-full flex-wrap items-center gap-x-6 gap-y-2 px-4 text-[17px] leading-[1.2] tracking-[-0.02em] text-black/70 sm:px-6 lg:px-[2.4vw]"
    >
      <p
        v-for="item in props.items"
        :key="item"
      >
        {{ item }}
      </p>
    </div>
  </footer>
</template>