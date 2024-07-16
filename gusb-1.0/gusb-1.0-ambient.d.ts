
declare module 'gi://GUsb?version=1.0' {
    import GUsb from './gusb-1.0.d.ts';
    export default GUsb;
}

declare module 'gi://GUsb' {
    import GUsb10 from 'gi://GUsb?version=1.0';
    export default GUsb10;
}


