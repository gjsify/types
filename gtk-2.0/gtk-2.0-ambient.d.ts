
declare module 'gi://Gtk?version=2.0' {
    const Gtk20: typeof import('./gtk-2.0.js').default
    export default Gtk20;
}

declare module 'gi://Gtk' {
    const Gtk20: typeof import('./gtk-2.0.js').default
    export default Gtk20;
}


