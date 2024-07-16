
declare module 'gi://GCalc?version=2' {
    import GCalc from './gcalc-2.d.ts';
    export default GCalc;
}

declare module 'gi://GCalc' {
    import GCalc2 from 'gi://GCalc?version=2';
    export default GCalc2;
}


