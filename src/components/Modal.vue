<template>
    <Teleport to="body">
        <Transition>
            <div v-if="modelValue" class="h-modal__backdrop" @click.self="close">
                <div
                    class="h-modal__container"
                    :class="`h-modal__container--${size}`"
                    :style="{ width: `${width}px`, padding: `${contentPadding}px` }"
                >
                    <slot></slot>
                    <button class="h-modal__close-btn" @click="emit('update:modelValue', false)" v-if="showCloseButton">
                        &times;
                    </button>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { ModalProps } from '@/types/modal.types'

const {
    modelValue,
    size = 'md',
    allowBackdropClose = false,
    showCloseButton = true,
    width,
    contentPadding,
} = defineProps<ModalProps>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

const close = () => {
    if (allowBackdropClose) {
        emit('update:modelValue', false)
    }
}
</script>
