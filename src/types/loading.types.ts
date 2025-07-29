export interface LoadingProps {
    size?: LoadingSize
    variant?: LoadingVariant
    color?: string
}

type LoadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
type LoadingVariant = 'primary' | 'secondary' | 'danger'
