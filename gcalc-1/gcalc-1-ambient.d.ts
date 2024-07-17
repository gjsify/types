
declare module 'gi://GCalc?version=1' {
    const GCalc1: typeof import('./gcalc-1.js').default
    export default GCalc1;
}

declare module 'gi://GCalc' {
    const GCalc1: typeof import('./gcalc-1.js').default
    export default GCalc1;
}


