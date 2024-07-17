
declare module 'gi://Accounts?version=1.0' {
    const Accounts10: typeof import('./accounts-1.0.js').default
    export default Accounts10;
}

declare module 'gi://Accounts' {
    const Accounts10: typeof import('./accounts-1.0.js').default
    export default Accounts10;
}


