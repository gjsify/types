
import MxGtk from './mxgtk-1.0.js';

declare global {
    export interface GjsGiImports {
        MxGtk: typeof MxGtk;
    }
}

export default GjsGiImports;


