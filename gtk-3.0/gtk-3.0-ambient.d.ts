
declare module 'gi://Gtk?version=3.0' {
    import Gtk from '@girs/gtk-3.0';
    export default Gtk;
}

declare module 'gi://Gtk' {
    import Gtk30 from 'gi://Gtk?version=3.0';
    export default Gtk30;
}


