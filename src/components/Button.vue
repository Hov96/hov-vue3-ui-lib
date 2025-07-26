<template>
    <button class="h-button" :disabled="disabled">My custom button</button>
</template>

<script setup lang="ts">
import { ButtonProps } from '@/types/button.types'

const { disabled } = defineProps<ButtonProps>()
</script>
