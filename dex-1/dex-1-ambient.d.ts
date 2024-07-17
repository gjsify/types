
declare module 'gi://Dex?version=1' {
    const Dex1: typeof import('./dex-1.js').default
    export default Dex1;
}

declare module 'gi://Dex' {
    const Dex1: typeof import('./dex-1.js').default
    export default Dex1;
}


