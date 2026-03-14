<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

import { cn } from '@/lib/utils'

import { buttonVariants, type ButtonVariants } from '.'

const props = withDefaults(
  defineProps<
    PrimitiveProps & {
      class?: string
      variant?: ButtonVariants['variant']
      size?: ButtonVariants['size']
    }
  >(),
  {
    as: 'button',
    class: '',
    variant: 'default',
    size: 'default',
  },
)
</script>

<template>
  <Primitive
    :as="props.as"
    :as-child="props.asChild"
    :class="cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)"
  >
    <slot />
  </Primitive>
</template>