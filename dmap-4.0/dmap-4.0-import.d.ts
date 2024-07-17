
import Dmap from './dmap-4.0.js';

declare global {
    export interface GjsGiImports {
        Dmap: typeof Dmap;
    }
}

export default GjsGiImports;


