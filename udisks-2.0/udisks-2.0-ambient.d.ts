
declare module 'gi://UDisks?version=2.0' {
    const UDisks20: typeof import('./udisks-2.0.js').default
    export default UDisks20;
}

declare module 'gi://UDisks' {
    const UDisks20: typeof import('./udisks-2.0.js').default
    export default UDisks20;
}


