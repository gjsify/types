declare module 'gi://Epc?version=1.0' {
    import Epc10 from '@girs/epc-1.0';
    export default Epc10;
}

declare module 'gi://Epc' {
    import Epc10 from 'gi://Epc?version=1.0';
    export default Epc10;
}
