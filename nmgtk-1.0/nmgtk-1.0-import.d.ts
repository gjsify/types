
import NMGtk from './nmgtk-1.0.js';

declare global {
    export interface GjsGiImports {
        NMGtk: typeof NMGtk;
    }
}

export default GjsGiImports;


