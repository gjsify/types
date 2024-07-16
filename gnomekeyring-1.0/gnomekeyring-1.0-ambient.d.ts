
declare module 'gi://GnomeKeyring?version=1.0' {
    import GnomeKeyring from './gnomekeyring-1.0.d.ts';
    export default GnomeKeyring;
}

declare module 'gi://GnomeKeyring' {
    import GnomeKeyring10 from 'gi://GnomeKeyring?version=1.0';
    export default GnomeKeyring10;
}


