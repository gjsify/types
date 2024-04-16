
import GnomeMaps10 from '@girs/gnomemaps-1.0';


declare global {
    export interface GjsGiImports {
        GnomeMaps: typeof GnomeMaps10;
    }
}

export default GjsGiImports;


