
import MxGtk from './mxgtk-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        MxGtk: typeof MxGtk;
    }
}

export default GjsGiImports;


