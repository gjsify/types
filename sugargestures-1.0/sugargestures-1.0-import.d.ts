
import SugarGestures from './sugargestures-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        SugarGestures: typeof SugarGestures;
    }
}

export default GjsGiImports;


