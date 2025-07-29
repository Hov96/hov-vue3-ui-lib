<template>
    <button class="h-button" :class="buttonClass" :disabled="disabled" @click="onClick">
        <div class="h-button--loader" v-if="loading">
            <Loading size="sm" />
        </div>
        <div class="h-button__content" :class="{ 'h-button__content--loading': loading }">
            <slot name="default"></slot>
        </div>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ButtonProps } from '@/types/button.types'
import Loading from './Loading.vue'

const { disabled, fluid, variant = 'primary', loading } = defineProps<ButtonProps>()
const emit = defineEmits(['onClick'])

const buttonClass = computed(() => {
    return {
        'h-button--disabled': disabled,
        'h-button--fluid': fluid,
        'h-button--loading': loading,
        [`h-button--${variant}`]: variant,
    }
})

const onClick = () => {
    if (!disabled || !loading) {
        emit('onClick')
    }
}
</script>
