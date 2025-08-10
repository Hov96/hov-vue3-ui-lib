<template>
    <div class="h-pill" :class="pillClass" @click.stop="handleClick">
        <div class="h-pill--loader" v-if="loading">
            <Loading :size="['sm', 'md'].includes(size) ? 'xs' : 'sm'" />
        </div>
        <div class="h-pill__icon">
            <slot name="start-icon"></slot>
        </div>
        <span class="h-pill__text">
            {{ label }}
        </span>
        <div class="h-pill__icon">
            <slot name="end-icon"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PillProps } from '@/types/pill.types'
import Loading from './Loading.vue'

const {
    label,
    size = 'md',
    variant = 'primary',
    readonly,
    disabled,
    transparent,
    fluid,
    bold,
    shadow,
    selected,
    loading
} = defineProps<PillProps>()

const pillClass = computed(() => {
    return {
        'h-pill--disabled': disabled,
        'h-pill--readonly': readonly,
        'h-pill--transparent': transparent,
        'h-pill--fluid': fluid,
        'h-pill--bold': bold,
        'h-pill--shadow': shadow,
        'h-pill--selected': selected,
        'h-pill--loading': loading,
        [`h-pill--${variant}`]: variant,
        [`h-pill--${size}`]: size,
        [`h-pill--${variant}`]: variant,
    }
})
const emit = defineEmits(['onClick'])

const handleClick = () => {
    if (!readonly && !disabled && !loading) {
        emit('onClick')
    }
}
</script>
