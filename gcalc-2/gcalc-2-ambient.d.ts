
declare module 'gi://GCalc?version=2' {
    import GCalc from '@girs/gcalc-2';
    export default GCalc;
}

declare module 'gi://GCalc' {
    import GCalc2 from 'gi://GCalc?version=2';
    export default GCalc2;
}


