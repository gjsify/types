
declare module 'gi://GCalc?version=2' {
    const GCalc2: typeof import('./gcalc-2.js').default
    export default GCalc2;
}

declare module 'gi://GCalc' {
    const GCalc2: typeof import('./gcalc-2.js').default
    export default GCalc2;
}


