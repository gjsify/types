
declare module 'gi://Rest?version=1.0' {
    const Rest10: typeof import('./rest-1.0.js').default
    export default Rest10;
}

declare module 'gi://Rest' {
    const Rest10: typeof import('./rest-1.0.js').default
    export default Rest10;
}


