
declare module 'gi://DBus?version=1.0' {
    import DBus from '@girs/dbus-1.0';
    export default DBus;
}

declare module 'gi://DBus' {
    import DBus10 from 'gi://DBus?version=1.0';
    export default DBus10;
}


