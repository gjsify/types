
import SugarExt from './sugarext-1.0.js';

declare global {
    export interface GjsGiImports {
        SugarExt: typeof SugarExt;
    }
}

export default GjsGiImports;


