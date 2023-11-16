
import GeocodeGlib10 from '@girs/geocodeglib-1.0';

declare global {
    export interface GjsGiImports {
        GeocodeGlib: typeof GeocodeGlib10;
    }
}

export default GjsGiImports;


