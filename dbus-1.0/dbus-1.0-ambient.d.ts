
declare module 'gi://DBus?version=1.0' {
    import DBus10 from '@girs/dbus-1.0';
    export default DBus10;
}

declare module 'gi://DBus' {
    import DBus10 from 'gi://DBus?version=1.0';
    export default DBus10;
}


