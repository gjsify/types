
declare module 'gi://FPrint?version=2.0' {
    import FPrint from './fprint-2.0.d.ts';
    export default FPrint;
}

declare module 'gi://FPrint' {
    import FPrint20 from 'gi://FPrint?version=2.0';
    export default FPrint20;
}


