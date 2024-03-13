
declare module 'gi://Qmi?version=1.0' {
    import Qmi10 from '@girs/qmi-1.0';
    export default Qmi10;
}

declare module 'gi://Qmi' {
    export * from 'gi://Qmi?version=1.0';
}


