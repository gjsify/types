
import PangoOT from './pangoot-1.0.js';

declare global {
    export interface GjsGiImports {
        PangoOT: typeof PangoOT;
    }
}

export default GjsGiImports;


