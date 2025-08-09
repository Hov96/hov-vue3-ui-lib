export interface ModalProps {
    modelValue: boolean
    size?: ModalSize
    allowBackdropClose?: boolean
    showCloseButton?: boolean
    width?: number
    contentPadding?: number
}

type ModalSize = 'sm' | 'md' | 'lg'
