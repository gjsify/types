
declare module 'gi://GCalc?version=1' {
    import GCalc from '@girs/gcalc-1';
    export default GCalc;
}

declare module 'gi://GCalc' {
    import GCalc1 from 'gi://GCalc?version=1';
    export default GCalc1;
}


