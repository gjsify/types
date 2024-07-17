
declare module 'gi://IBus?version=1.0' {
    const IBus10: typeof import('./ibus-1.0.js').default
    export default IBus10;
}

declare module 'gi://IBus' {
    const IBus10: typeof import('./ibus-1.0.js').default
    export default IBus10;
}


