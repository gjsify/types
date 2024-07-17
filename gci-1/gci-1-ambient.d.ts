
declare module 'gi://GCi?version=1' {
    const GCi1: typeof import('./gci-1.js').default
    export default GCi1;
}

declare module 'gi://GCi' {
    const GCi1: typeof import('./gci-1.js').default
    export default GCi1;
}


