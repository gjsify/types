
declare module 'gi://Gtk?version=4.0' {
    import Gtk from '@girs/gtk-4.0';
    export default Gtk;
}

declare module 'gi://Gtk' {
    import Gtk40 from 'gi://Gtk?version=4.0';
    export default Gtk40;
}


