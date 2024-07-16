
import DMAP from './dmap-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        DMAP: typeof DMAP;
    }
}

export default GjsGiImports;


