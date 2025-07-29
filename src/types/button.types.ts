export interface ButtonProps {
    /**
     * Controls whether the button is interactive or not.
     * @default false
     */
    disabled?: boolean
    fluid?: boolean
    variant?: ButtonVariant
    loading?: boolean
}

type ButtonVariant = 'primary' | 'secondary' | 'danger'
