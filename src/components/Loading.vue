<template>
    <div
        class="h-loader"
        :class="{ [`h-loader--${size}`]: size, [`h-loader--${variant}`]: variant }"
        :style="{ borderColor: color ? color : undefined + '!important' }"
    ></div>
</template>

<script setup lang="ts">
import { LoadingProps } from '@/types/loading.types'

const { size = 'md', variant = 'primary', color } = defineProps<LoadingProps>()
</script>
