
declare module 'gi://GnomeDesktop?version=3.0' {
    import GnomeDesktop from './gnomedesktop-3.0.d.ts';
    export default GnomeDesktop;
}

declare module 'gi://GnomeDesktop' {
    import GnomeDesktop30 from 'gi://GnomeDesktop?version=3.0';
    export default GnomeDesktop30;
}


