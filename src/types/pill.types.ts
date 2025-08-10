export interface PillProps {
    label: string
    size?: PillSize
    variant?: PillVariant
    readonly?: boolean
    disabled?: boolean
    transparent?: boolean
    loading?: boolean
    fluid?: boolean
    bold?: boolean
    shadow?: boolean
    selected?: boolean
}

type PillSize = 'sm' | 'md' | 'lg'
type PillVariant = 'primary' | 'secondary' | 'danger'
