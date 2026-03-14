<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

import HoverSlideText from '@/components/common/HoverSlideText.vue'
import MooovLogo from '@/components/layout/MooovLogo.vue'
import { Button } from '@/components/ui/button'
import type { HeroSceneKey, NavItem } from '@/types/site'

const props = defineProps<{
  items: NavItem[]
}>()

const emit = defineEmits<{
  'scene-preview': [HeroSceneKey]
  'toggle-drawer': []
  'open-showreel': []
  'filter-category': [string | null]
}>()

const mobileOpen = ref(false)
const isHeaderVisible = ref(true)
let lastScrollY = 0

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
}

function handleItemClick(item: NavItem, filter?: string, scene?: HeroSceneKey) {
  mobileOpen.value = false
  emit('filter-category', filter ?? null)
  emit('scene-preview', scene ?? item.scene ?? 'default')

  const target = document.querySelector(item.href)

  if (target instanceof HTMLElement) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function handleActionClick() {
  mobileOpen.value = false
  emit('toggle-drawer')
}

function syncHeaderVisibility() {
  const currentScrollY = window.scrollY
  const isAtTop = currentScrollY <= 6

  if (isAtTop) {
    isHeaderVisible.value = true
  } else if (currentScrollY > lastScrollY) {
    isHeaderVisible.value = false
  } else {
    isHeaderVisible.value = false
  }

  lastScrollY = currentScrollY
}

onMounted(() => {
  lastScrollY = window.scrollY
  syncHeaderVisibility()
  window.addEventListener('scroll', syncHeaderVisibility, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', syncHeaderVisibility)
})
</script>

<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-50 h-[117px] will-change-transform transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
      isHeaderVisible || mobileOpen
        ? 'translate-y-0'
        : '-translate-y-[120px] pointer-events-none',
    ]"
  >
    <div class="flex h-full w-full items-center px-4 sm:px-6 lg:px-[2.4vw]">
      <div class="relative w-full text-white transition">
        <div class="flex items-center gap-[calc(1.875*var(--transform))]">
          <a
            href="#top"
            class="mr-auto flex h-[30px] w-[276px] items-center text-black"
          >
            <MooovLogo class="h-full w-full" />
          </a>

          <nav class="hidden items-center gap-10 text-white mix-blend-difference lg:flex">
            <button
              v-for="item in props.items"
              :key="item.id"
              type="button"
              class="hover-slide-link font-[var(--font-body)] tracking-[-0.03em] transition hover:opacity-75"
              style="font-size: 27px; line-height: 1.1;"
              @click="handleItemClick(item)"
            >
              <span class="header-link-underline inline-block">
                <HoverSlideText
                  :label="item.label"
                  offset="1.1em"
                />
              </span>
            </button>
          </nav>

          <button
            type="button"
            class="hover-slide-link hidden pl-24 font-[var(--font-body)] tracking-[-0.03em] text-white mix-blend-difference transition hover:opacity-75 lg:block"
            style="font-size: 27px; line-height: 1.1;"
            @click="handleActionClick"
          >
            <span class="header-link-underline inline-block">
              <HoverSlideText
                label="Contacts"
                offset="1.1em"
              />
            </span>
          </button>

          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/18 transition hover:bg-white/10 lg:hidden"
            @click="toggleMobile"
          >
            <Menu
              v-if="!mobileOpen"
              class="h-5 w-5"
            />
            <X
              v-else
              class="h-5 w-5"
            />
          </button>
        </div>
      </div>
    </div>

    <Transition name="overlay-fade">
      <div
        v-if="mobileOpen"
        class="mt-3 rounded-[36px] border border-black/8 bg-[rgba(255,255,255,0.98)] p-5 text-black shadow-[0_30px_80px_rgba(0,0,0,0.16)] lg:hidden"
      >
        <div class="space-y-5">
          <div
            v-for="item in props.items"
            :key="item.id"
            class="space-y-2"
          >
            <button
              type="button"
              class="text-[24px] leading-none tracking-[-0.04em]"
              @click="handleItemClick(item)"
            >
              {{ item.label }}
            </button>
            <div class="space-y-2 pl-1">
              <button
                v-for="child in item.children"
                :key="child.id"
                type="button"
                class="block text-left text-[14px] text-black/65"
                @click="handleItemClick(item, child.filter, child.scene)"
              >
                {{ child.label }}
              </button>
            </div>
          </div>
          <div class="flex flex-wrap gap-3 pt-2">
            <Button
              variant="default"
              size="sm"
              @click="$emit('open-showreel')"
            >
              Watch showreel
            </Button>
            <Button
              variant="outline"
              size="sm"
              @click="handleActionClick"
            >
              Open drawer
            </Button>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
