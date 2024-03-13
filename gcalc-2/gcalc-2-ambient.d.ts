
declare module 'gi://GCalc?version=2' {
    import GCalc2 from '@girs/gcalc-2';
    export default GCalc2;
}

declare module 'gi://GCalc' {
    export * from 'gi://GCalc?version=2';
}


