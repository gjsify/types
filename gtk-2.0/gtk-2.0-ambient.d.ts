
declare module 'gi://Gtk?version=2.0' {
    import Gtk from './gtk-2.0.d.ts';
    export default Gtk;
}

declare module 'gi://Gtk' {
    import Gtk20 from 'gi://Gtk?version=2.0';
    export default Gtk20;
}


