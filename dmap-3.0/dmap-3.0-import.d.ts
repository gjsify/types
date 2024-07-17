
import DMAP from './dmap-3.0.js';

declare global {
    export interface GjsGiImports {
        DMAP: typeof DMAP;
    }
}

export default GjsGiImports;


