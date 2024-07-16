
import NMGtk from './nmgtk-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        NMGtk: typeof NMGtk;
    }
}

export default GjsGiImports;


