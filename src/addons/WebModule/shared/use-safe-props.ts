// composables/useSafeProps.ts
export function useSafeProps(component: any, props: Record<string, unknown>) {
    const allowed = component?.props ? Object.keys(component.props) : []
    return Object.fromEntries(
        Object.entries(props).filter(([key]) => allowed.includes(key))
    )
}
