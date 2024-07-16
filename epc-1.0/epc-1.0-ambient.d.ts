
declare module 'gi://Epc?version=1.0' {
    import Epc from './epc-1.0.d.ts';
    export default Epc;
}

declare module 'gi://Epc' {
    import Epc10 from 'gi://Epc?version=1.0';
    export default Epc10;
}


