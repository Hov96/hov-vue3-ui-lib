<template>
    <input
        class="h-input"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :type="type"
        @input="($event) => $emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
</template>

<script setup lang="ts">
import { InputProps } from '@/types/input.type'

const { modelValue, placeholder, disabled, type } = defineProps<InputProps>()
</script>
