
declare module 'gi://GPlugin?version=1.0' {
    const GPlugin10: typeof import('./gplugin-1.0.js').default
    export default GPlugin10;
}

declare module 'gi://GPlugin' {
    const GPlugin10: typeof import('./gplugin-1.0.js').default
    export default GPlugin10;
}


