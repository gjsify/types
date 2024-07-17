
declare module 'gi://Caja?version=2.0' {
    const Caja20: typeof import('./caja-2.0.js').default
    export default Caja20;
}

declare module 'gi://Caja' {
    const Caja20: typeof import('./caja-2.0.js').default
    export default Caja20;
}


