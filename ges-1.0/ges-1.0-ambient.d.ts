
declare module 'gi://GES?version=1.0' {
    const GES10: typeof import('./ges-1.0.js').default
    export default GES10;
}

declare module 'gi://GES' {
    const GES10: typeof import('./ges-1.0.js').default
    export default GES10;
}


