
declare module 'gi://Signon?version=2.0' {
    const Signon20: typeof import('./signon-2.0.js').default
    export default Signon20;
}

declare module 'gi://Signon' {
    const Signon20: typeof import('./signon-2.0.js').default
    export default Signon20;
}


