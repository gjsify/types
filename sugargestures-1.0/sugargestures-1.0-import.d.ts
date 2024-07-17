
import SugarGestures from './sugargestures-1.0.js';

declare global {
    export interface GjsGiImports {
        SugarGestures: typeof SugarGestures;
    }
}

export default GjsGiImports;


