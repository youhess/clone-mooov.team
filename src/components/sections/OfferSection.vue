<script setup lang="ts">
const props = defineProps<{
  columns: string[][]
}>()
</script>

<template>
  <section
    id="offer"
    class="border-b border-black/10 bg-white"
  >
    <div class="px-4 sm:px-6 lg:px-[2.4vw]">
      <div class="flex min-h-[420px] flex-col gap-10 py-10 lg:min-h-[680px] lg:flex-row lg:gap-12 lg:py-8">
        <div class="w-full lg:w-1/2">
          <p class="text-[23px] leading-[1.25] tracking-[-0.03em] text-black">
            What do we offer?
          </p>
        </div>
        <div class="flex w-full flex-col gap-8 text-[23px] leading-[1.38] tracking-[-0.03em] text-black lg:w-1/2 lg:flex-row lg:gap-[52px]">
          <div
            v-for="(column, index) in props.columns"
            :key="index"
            class="flex-1 space-y-8"
          >
            <p
              v-for="paragraph in column"
              :key="paragraph"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>