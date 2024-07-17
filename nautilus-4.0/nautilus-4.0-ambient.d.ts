
declare module 'gi://Nautilus?version=4.0' {
    const Nautilus40: typeof import('./nautilus-4.0.js').default
    export default Nautilus40;
}

declare module 'gi://Nautilus' {
    const Nautilus40: typeof import('./nautilus-4.0.js').default
    export default Nautilus40;
}


