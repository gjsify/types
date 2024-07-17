
declare module 'gi://NMClient?version=1.0' {
    const NMClient10: typeof import('./nmclient-1.0.js').default
    export default NMClient10;
}

declare module 'gi://NMClient' {
    const NMClient10: typeof import('./nmclient-1.0.js').default
    export default NMClient10;
}


