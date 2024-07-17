
declare module 'gi://Nice?version=0.1' {
    const Nice01: typeof import('./nice-0.1.js').default
    export default Nice01;
}

declare module 'gi://Nice' {
    const Nice01: typeof import('./nice-0.1.js').default
    export default Nice01;
}


