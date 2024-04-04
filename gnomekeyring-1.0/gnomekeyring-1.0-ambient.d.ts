
declare module 'gi://GnomeKeyring?version=1.0' {
    import GnomeKeyring from '@girs/gnomekeyring-1.0';
    export default GnomeKeyring;
}

declare module 'gi://GnomeKeyring' {
    import GnomeKeyring10 from 'gi://GnomeKeyring?version=1.0';
    export default GnomeKeyring10;
}


