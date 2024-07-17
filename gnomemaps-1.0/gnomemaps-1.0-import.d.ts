
import GnomeMaps from './gnomemaps-1.0.js';

declare global {
    export interface GjsGiImports {
        GnomeMaps: typeof GnomeMaps;
    }
}

export default GjsGiImports;


