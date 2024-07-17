
declare module 'gi://Budgie?version=1.0' {
    const Budgie10: typeof import('./budgie-1.0.js').default
    export default Budgie10;
}

declare module 'gi://Budgie' {
    const Budgie10: typeof import('./budgie-1.0.js').default
    export default Budgie10;
}


