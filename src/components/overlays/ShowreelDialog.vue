<script setup lang="ts">
import { computed } from 'vue'
import { DialogClose, DialogContent, DialogOverlay, DialogPortal, DialogRoot } from 'reka-ui'
import { X } from 'lucide-vue-next'

const props = defineProps<{
  open: boolean
  iframeSrc: string
}>()

const emit = defineEmits<{
  'update:open': [boolean]
}>()

const modelValue = computed({
  get: () => props.open,
  set: (value: boolean) => emit('update:open', value),
})
</script>

<template>
  <DialogRoot v-model:open="modelValue">
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 z-[80] bg-black/55 backdrop-blur-sm" />
      <DialogContent
        class="fixed left-1/2 top-1/2 z-[81] w-[min(1100px,calc(100vw-1.5rem))] -translate-x-1/2 -translate-y-1/2 rounded-[32px] bg-[#0b0b0b] p-3 text-white shadow-[0_40px_100px_rgba(0,0,0,0.4)] outline-none sm:p-5"
      >
        <div class="mb-3 flex items-center justify-between px-2">
          <div>
            <p class="text-[12px] uppercase tracking-[0.24em] text-white/52">
              Showreel
            </p>
            <p class="text-[15px] tracking-[-0.02em] text-white/72">
              Design & Motion / Film & VFX
            </p>
          </div>
          <DialogClose
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/14 transition hover:bg-white/8"
          >
            <X class="h-5 w-5" />
          </DialogClose>
        </div>

        <div class="aspect-[16/9] overflow-hidden rounded-[24px] bg-black">
          <iframe
            :src="props.iframeSrc"
            title="MOOOV showreel"
            class="h-full w-full border-0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          />
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>