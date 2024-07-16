
declare module 'gi://Gtk?version=3.0' {
    import Gtk from './gtk-3.0.d.ts';
    export default Gtk;
}

declare module 'gi://Gtk' {
    import Gtk30 from 'gi://Gtk?version=3.0';
    export default Gtk30;
}


