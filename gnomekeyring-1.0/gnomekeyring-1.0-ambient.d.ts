
declare module 'gi://GnomeKeyring?version=1.0' {
    const GnomeKeyring10: typeof import('./gnomekeyring-1.0.js').default
    export default GnomeKeyring10;
}

declare module 'gi://GnomeKeyring' {
    const GnomeKeyring10: typeof import('./gnomekeyring-1.0.js').default
    export default GnomeKeyring10;
}


