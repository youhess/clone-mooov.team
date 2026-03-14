<script setup lang="ts">
import { computed } from 'vue'
import { ArrowUpRight, X } from 'lucide-vue-next'
import { DialogClose, DialogContent, DialogOverlay, DialogPortal, DialogRoot } from 'reka-ui'

import { Button } from '@/components/ui/button'
import type { DrawerSection } from '@/types/site'

const props = defineProps<{
  open: boolean
  sections: DrawerSection[]
}>()

const emit = defineEmits<{
  'update:open': [boolean]
  'open-showreel': []
}>()

const modelValue = computed({
  get: () => props.open,
  set: (value: boolean) => emit('update:open', value),
})

function scrollToContact() {
  emit('update:open', false)
  const target = document.querySelector('#contact')

  if (target instanceof HTMLElement) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <DialogRoot v-model:open="modelValue">
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 z-[70] bg-black/22" />
      <DialogContent
        class="fixed inset-y-0 right-0 z-[71] flex w-[min(520px,100vw)] flex-col bg-[#121212] px-5 pb-8 pt-5 text-white shadow-[-25px_0_80px_rgba(0,0,0,0.28)] outline-none sm:px-7"
      >
        <div class="mb-10 flex items-center justify-between">
          <div>
            <p class="text-[12px] uppercase tracking-[0.24em] text-white/52">
              Project brief
            </p>
            <h2 class="mt-3 max-w-[12ch] font-[var(--font-display)] text-[40px] leading-[0.92] tracking-[-0.05em]">
              Let us shape the next release.
            </h2>
          </div>
          <DialogClose
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/14 transition hover:bg-white/8"
          >
            <X class="h-5 w-5" />
          </DialogClose>
        </div>

        <div class="space-y-6">
          <article
            v-for="section in props.sections"
            :key="section.title"
            class="rounded-[28px] border border-white/10 bg-white/4 p-5"
          >
            <p class="text-[13px] uppercase tracking-[0.22em] text-white/48">
              {{ section.title }}
            </p>
            <p class="mt-3 text-[15px] leading-7 tracking-[-0.02em] text-white/78">
              {{ section.body }}
            </p>
          </article>
        </div>

        <div class="mt-auto pt-8">
          <div class="flex flex-wrap gap-3">
            <Button
              variant="inverted"
              size="lg"
              class="rounded-full"
              @click="scrollToContact"
            >
              Contact form
              <ArrowUpRight class="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              class="rounded-full border-white/18 bg-transparent text-white hover:bg-white/8"
              @click="$emit('open-showreel')"
            >
              Watch showreel
            </Button>
          </div>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>