
import SugarExt from './sugarext-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        SugarExt: typeof SugarExt;
    }
}

export default GjsGiImports;


