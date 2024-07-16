
declare module 'gi://ModemManager?version=1.0' {
    import ModemManager from './modemmanager-1.0.d.ts';
    export default ModemManager;
}

declare module 'gi://ModemManager' {
    import ModemManager10 from 'gi://ModemManager?version=1.0';
    export default ModemManager10;
}


