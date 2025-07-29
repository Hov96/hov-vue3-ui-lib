<template>
    <div class="h-input" :class="{ 'h-input--disabled': disabled }">
        <label v-if="label" class="h-input__title" :class="{ 'h-input__title-bold': boldLabel }" :for="id">
            {{ label }}
            <span :style="{ color: asteriskColor ? asteriskColor : 'var(--color-danger)' }">{{ required ? '*' : '' }}</span>
        </label>

        <div class="h-input__content">
            <input
                class="h-input__input"
                :class="{
                    'h-input__input--disabled': disabled,
                    'h-input__input--error': errorMessage,
                    'h-input__input--no-shadow': noShadow,
                    'h-input__input--hide-appearance': hideAppearance,
                    'h-input__input--with-start-icon': $slots['start-icon'],
                    'h-input__input--with-end-icon': $slots['end-icon'] || type === 'password',
                }"
                :id="id"
                :type="inputType"
                :value="modelValue"
                :placeholder="placeholder"
                :disabled="disabled"
                :min="min"
                :max="max"
                :minlength="minLength"
                :maxlength="maxLength"
                :required="required"
                @input="onInput"
                @blur="emit('onBlur', $event)"
                @focus="emit('onFocus', $event)"
                @keydown="emit('onKeydown', $event)"
                @keyup="emit('onKeyup', $event)"
                @change="emit('onChange', $event)"
            />

            <div v-if="$slots['start-icon']" class="h-input__start-icon">
                <slot name="start-icon"></slot>
            </div>

            <div v-if="type === 'password'" class="h-input__end-icon">
                <img
                    :src="EyeIcon"
                    alt="Eye icon"
                    width="18"
                    height="18"
                    @click="inputType = 'text'"
                    v-if="inputType === 'password'"
                />
                <img :src="EyeSlashIcon" alt="Eye slash icon" width="18" height="18" @click="inputType = 'password'" v-else />
            </div>

            <div v-else-if="$slots['end-icon']" class="h-input__end-icon">
                <slot name="end-icon"></slot>
            </div>
        </div>

        <p v-if="errorMessage" class="h-input__error-message">
            {{ errorMessage }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputProps } from '@/types/input.types'

// Icons
import EyeIcon from '../assets/icons/eye.svg'
import EyeSlashIcon from '../assets/icons/eye-slash.svg'

const {
    modelValue,
    id = 'h-input',
    label,
    placeholder = '',
    disabled = false,
    errorMessage = '',
    type = 'text',
    min,
    max,
    noShadow = false,
    hideAppearance = false,
    required = false,
    asteriskColor,
    minLength,
    maxLength,
    boldLabel,
} = defineProps<InputProps>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'onInput', event: Event): void
    (e: 'onBlur', event: FocusEvent): void
    (e: 'onFocus', event: FocusEvent): void
    (e: 'onKeydown', event: KeyboardEvent): void
    (e: 'onKeyup', event: KeyboardEvent): void
    (e: 'onChange', event: Event): void
}>()

const inputType = ref(type || 'text')

const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.value)
    emit('onInput', event)
}
</script>
