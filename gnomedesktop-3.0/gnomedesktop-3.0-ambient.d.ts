declare module 'gi://GnomeDesktop?version=3.0' {
    import GnomeDesktop30 from '@girs/gnomedesktop-3.0';
    export default GnomeDesktop30;
}

declare module 'gi://GnomeDesktop' {
    import GnomeDesktop30 from 'gi://GnomeDesktop?version=3.0';
    export default GnomeDesktop30;
}
