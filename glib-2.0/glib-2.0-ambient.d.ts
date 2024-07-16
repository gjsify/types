
declare module 'gi://GLib?version=2.0' {
    import GLib from './glib-2.0.d.ts';
    export default GLib;
}

declare module 'gi://GLib' {
    import GLib20 from 'gi://GLib?version=2.0';
    export default GLib20;
}


