<template>
    <div class="h-card" :class="cardClass" :style="{ background, borderRadius: radius, padding }">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { CardProps } from '@/types/card.types'

const { background, fluid, noBorder, padding, radius, noShadow, variant = 'primary' } = defineProps<CardProps>()

const cardClass = computed(() => {
    return {
        'h-card--no-border': noBorder,
        'h-card--fluid': fluid,
        [`h-card--${variant}`]: variant,
        'h-card--no-shadow': noShadow,
    }
})
</script>
