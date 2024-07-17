
declare module 'gi://Anthy?version=9000' {
    const Anthy9000: typeof import('./anthy-9000.js').default
    export default Anthy9000;
}

declare module 'gi://Anthy' {
    const Anthy9000: typeof import('./anthy-9000.js').default
    export default Anthy9000;
}


