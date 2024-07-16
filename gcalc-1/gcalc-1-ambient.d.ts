
declare module 'gi://GCalc?version=1' {
    import GCalc from './gcalc-1.d.ts';
    export default GCalc;
}

declare module 'gi://GCalc' {
    import GCalc1 from 'gi://GCalc?version=1';
    export default GCalc1;
}


