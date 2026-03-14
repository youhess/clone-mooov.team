<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

import HoverSlideText from '@/components/common/HoverSlideText.vue'
import MooovLogo from '@/components/layout/MooovLogo.vue'
import { Button } from '@/components/ui/button'
import Input from '@/components/ui/input/Input.vue'
import Textarea from '@/components/ui/textarea/Textarea.vue'
import type { LinkGroup } from '@/types/site'

const props = defineProps<{
  groups: LinkGroup[]
}>()

const companyGroup = computed(() => props.groups.find((group) => group.title === 'Company') ?? null)
const contactsGroup = computed(() => props.groups.find((group) => group.title === 'Contacts') ?? null)
const socialGroup = computed(() => props.groups.find((group) => group.title === 'Social') ?? null)

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<template>
  <section
    id="contact"
    class="max-h-screen overflow-hidden bg-white pt-16 md:pt-20"
  >
    <div class="px-4 sm:px-6 lg:px-[2.4vw]">
      <div class="border-b border-black/10 pb-16">
        <MooovLogo class="mb-8 w-[94px] text-black" />

        <div class="flex flex-col gap-14 lg:flex-row lg:gap-12">
          <div class="w-full lg:w-[46%]">
            <h2
              class="max-w-[14ch] font-[var(--font-display)] text-[36px] leading-[0.96] tracking-[-0.05em]"
            >
              Contact us for additional information about the project
            </h2>

            <div class="mt-20 grid max-w-[640px] grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-[220px_1fr]">
              <div
                v-if="companyGroup"
                class="min-w-0"
              >
                <p class="mb-7 text-[22px] leading-[1.1] tracking-[-0.03em] text-black/62">
                  {{ companyGroup.title }}
                </p>
                <ul class="space-y-3 text-[27px] leading-[1.3] tracking-[-0.03em]">
                  <li
                    v-for="link in companyGroup.links"
                    :key="link.label"
                  >
                    <a
                      :href="link.href"
                      class="hover-slide-link inline-flex transition hover:opacity-70"
                    >
                      <span class="hover-link-underline">
                        <HoverSlideText
                          :label="link.label"
                          offset="1.3em"
                        />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div
                v-if="contactsGroup"
                class="min-w-0"
              >
                <p class="mb-7 text-[22px] leading-[1.1] tracking-[-0.03em] text-black/62">
                  {{ contactsGroup.title }}
                </p>
                <div class="space-y-8 text-[27px] leading-[1.3] tracking-[-0.03em]">
                  <ul class="space-y-3">
                    <li
                      v-for="link in contactsGroup.links"
                      :key="link.label"
                    >
                      <a
                        :href="link.href"
                        class="transition hover:opacity-70"
                      >{{ link.label }}</a>
                    </li>
                  </ul>

                  <ul
                    v-if="socialGroup"
                    class="space-y-3"
                  >
                    <li
                      v-for="link in socialGroup.links"
                      :key="link.label"
                    >
                      <a
                        :href="link.href"
                        class="hover-slide-link inline-flex items-center gap-2 transition hover:opacity-70"
                      >
                        <span class="hover-link-underline">
                          <HoverSlideText
                            :label="link.label"
                            offset="1.3em"
                          />
                        </span>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          class="h-[0.72em] w-[0.72em]"
                        >
                          <path
                            d="M23 24V2H1"
                            stroke="#1E1E1E"
                            stroke-width="3.5"
                          />
                          <path
                            d="M23 2L2 23"
                            stroke="#1E1E1E"
                            stroke-width="3.5"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full lg:w-[54%]">
            <form
              class="space-y-8"
              @submit.prevent="handleSubmit"
            >
              <label class="block">
                <span class="sr-only">Name</span>
                <Input
                  v-model="form.name"
                  placeholder="Name"
                  class="h-[72px] pb-5 text-[20px] placeholder:text-black"
                  style="font: 400 20px/1.1 var(--font-body);"
                />
              </label>
              <label class="block">
                <span class="sr-only">Email</span>
                <Input
                  v-model="form.email"
                  type="email"
                  placeholder="Email"
                  class="h-[72px] pb-5 text-[20px] placeholder:text-black"
                  style="font: 400 20px/1.1 var(--font-body);"
                />
              </label>
              <label class="block">
                <span class="sr-only">Message</span>
                <Textarea
                  v-model="form.message"
                  placeholder="Message"
                  class="min-h-[80px] pb-5 pt-0 text-[20px] placeholder:text-black"
                  style="font: 400 20px/1.1 var(--font-body);"
                />
              </label>

              <div class="flex flex-col gap-5 pt-6 sm:flex-row sm:items-start">
                <Button
                  type="submit"
                  variant="outline"
                  size="lg"
                  class="h-[78px] min-w-[144px] rounded-none border-black/40 bg-transparent px-10 text-[23px] font-normal"
                >
                  Send
                </Button>
                <p class="max-w-[32ch] pt-1 text-[11px] leading-[1.45] text-black/72">
                  By clicking on the button, I agree to <a
                    href="#contact"
                    class="underline underline-offset-2"
                  >processing of personal data</a>
                </p>
              </div>
            </form>

            <p
              v-if="submitted"
              class="mt-6 text-[14px] leading-6 text-black/72"
            >
              Thank you! Your message has been sent. We will contact you shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
