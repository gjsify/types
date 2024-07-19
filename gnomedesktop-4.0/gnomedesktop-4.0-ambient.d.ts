declare module 'gi://GnomeDesktop?version=4.0' {
    import GnomeDesktop40 from '@girs/gnomedesktop-4.0';
    export default GnomeDesktop40;
}

declare module 'gi://GnomeDesktop' {
    import GnomeDesktop40 from 'gi://GnomeDesktop?version=4.0';
    export default GnomeDesktop40;
}
