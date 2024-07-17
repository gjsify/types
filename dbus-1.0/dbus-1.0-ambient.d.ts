
declare module 'gi://DBus?version=1.0' {
    const DBus10: typeof import('./dbus-1.0.js').default
    export default DBus10;
}

declare module 'gi://DBus' {
    const DBus10: typeof import('./dbus-1.0.js').default
    export default DBus10;
}


