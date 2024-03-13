
declare module 'gi://GUsb?version=1.0' {
    import GUsb10 from '@girs/gusb-1.0';
    export default GUsb10;
}

declare module 'gi://GUsb' {
    export * from 'gi://GUsb?version=1.0';
}


