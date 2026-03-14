<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string
    offset?: string
  }>(),
  {
    offset: '1em',
  },
)
</script>

<template>
  <span
    class="hover-slide-text"
    :style="{ '--hover-slide-offset': offset }"
  >
    <span class="hover-slide-text__track">
      <span class="hover-slide-text__line">{{ label }}</span>
      <span
        aria-hidden="true"
        class="hover-slide-text__line"
      >{{ label }}</span>
    </span>
  </span>
</template>
