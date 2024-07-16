
import GnomeMaps from './gnomemaps-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GnomeMaps: typeof GnomeMaps;
    }
}

export default GjsGiImports;


