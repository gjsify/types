
declare module 'gi://GnomeKeyring?version=1.0' {
    import GnomeKeyring10 from '@girs/gnomekeyring-1.0';
    export default GnomeKeyring10;
}

declare module 'gi://GnomeKeyring' {
    export default 'gi://GnomeKeyring?version=1.0';
}


