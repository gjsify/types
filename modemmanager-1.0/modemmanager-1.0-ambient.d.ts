declare module 'gi://ModemManager?version=1.0' {
    import ModemManager10 from '@girs/modemmanager-1.0';
    export default ModemManager10;
}

declare module 'gi://ModemManager' {
    import ModemManager10 from 'gi://ModemManager?version=1.0';
    export default ModemManager10;
}
