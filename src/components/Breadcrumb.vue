<template>
    <nav aria-label="breadcrumb" class="h-breadcrumb">
        <ol class="h-breadcrumb__list">
            <li class="h-breadcrumb__item" v-if="$slots['start-icon']">
                <slot name="start-icon"></slot>
            </li>
            <li
                v-for="(crumb, index) in breadcrumbs"
                :key="index"
                class="h-breadcrumb__item"
                :class="{ 'is-active': index === breadcrumbs.length - 1 }"
            >
                <span class="h-breadcrumb__label" @click="handleClick(crumb, index)">
                    {{ crumb.label }}
                </span>

                <span v-if="index !== breadcrumbs.length - 1" class="h-breadcrumb__separator">
                    {{ separator ?? '/' }}
                </span>
            </li>
        </ol>
    </nav>
</template>

<script setup lang="ts">
import { BreadcrumbProps, CrumbItem } from '@/types/breadcrumb.types'

const emit = defineEmits(['handleClick'])
const { breadcrumbs, separator } = defineProps<BreadcrumbProps>()

const handleClick = (crumb: CrumbItem, index: number) => {
    if (index !== breadcrumbs.length - 1) {
        emit('handleClick', { crumb, index })
    }
}
</script>
