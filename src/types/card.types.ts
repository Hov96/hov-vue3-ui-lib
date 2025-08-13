export interface CardProps {
    noBorder?: boolean
    fluid?: boolean
    padding?: string
    noShadow?: boolean
    variant?: CardVariant
    radius?: string
    background?: string
}

type CardVariant = 'primary' | 'secondary' | 'danger'
