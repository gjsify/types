
declare module 'gi://GnomeDesktop?version=4.0' {
    import GnomeDesktop from './gnomedesktop-4.0.d.ts';
    export default GnomeDesktop;
}

declare module 'gi://GnomeDesktop' {
    import GnomeDesktop40 from 'gi://GnomeDesktop?version=4.0';
    export default GnomeDesktop40;
}


