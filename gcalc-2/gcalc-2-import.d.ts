
import GCalc from './gcalc-2.js';

declare global {
    export interface GjsGiImports {
        GCalc: typeof GCalc;
    }
}

export default GjsGiImports;


