
import GCalc from './gcalc-2.d.ts';

declare global {
    export interface GjsGiImports {
        GCalc: typeof GCalc;
    }
}

export default GjsGiImports;


