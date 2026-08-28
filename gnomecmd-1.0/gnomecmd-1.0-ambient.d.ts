
declare module 'gi://GnomeCmd?version=1.0' {
    import GnomeCmd10 from '@girs/gnomecmd-1.0';
    export default GnomeCmd10;
}

declare module 'gi://GnomeCmd' {
    import GnomeCmd10 from 'gi://GnomeCmd?version=1.0';
    export default GnomeCmd10;
}


