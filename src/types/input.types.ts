export interface InputProps {
    /**
     * The value of the input field.
     */
    modelValue?: string

    /**
     * Placeholder text for the input field.
     */
    placeholder?: string

    /**
     * Whether the input is disabled.
     * @default false
     */
    disabled?: boolean

    /**
     * The type of the input field.
     * @default 'text'
     */
    type?: InputType

    label?: string
    id?: string
    errorMessage?: string
    min?: number
    max?: number
    minLength?: number
    maxLength?: number
    noShadow?: boolean
    hideAppearance?: boolean
    required?: boolean
    asteriskColor?: string
    boldLabel?: boolean
}

type InputType = 'text' | 'number' | 'password' | 'email'
