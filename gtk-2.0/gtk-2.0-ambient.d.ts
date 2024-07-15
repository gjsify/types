
declare module 'gi://Gtk?version=2.0' {
    import Gtk from '@girs/gtk-2.0';
    export default Gtk;
}

declare module 'gi://Gtk' {
    import Gtk20 from 'gi://Gtk?version=2.0';
    export default Gtk20;
}


