
declare module 'gi://Secret?version=1' {
    const Secret1: typeof import('./secret-1.js').default
    export default Secret1;
}

declare module 'gi://Secret' {
    const Secret1: typeof import('./secret-1.js').default
    export default Secret1;
}


