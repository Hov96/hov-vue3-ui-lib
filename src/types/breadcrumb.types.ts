export interface BreadcrumbProps {
    breadcrumbs: Array<CrumbItem>
    separator?: string
}

export interface CrumbItem {
    label: string
    href?: string
}
