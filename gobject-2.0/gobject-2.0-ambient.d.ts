
declare module 'gi://GObject?version=2.0' {
    import GObject from '@girs/gobject-2.0';
    export default GObject;
}

declare module 'gi://GObject' {
    import GObject20 from 'gi://GObject?version=2.0';
    export default GObject20;
}


