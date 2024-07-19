declare module 'gi://FPrint?version=2.0' {
    import FPrint20 from '@girs/fprint-2.0';
    export default FPrint20;
}

declare module 'gi://FPrint' {
    import FPrint20 from 'gi://FPrint?version=2.0';
    export default FPrint20;
}
