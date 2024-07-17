
import GeocodeGlib20 from '@girs/geocodeglib-2.0';

declare global {
    export interface GjsGiImports {
        GeocodeGlib: typeof GeocodeGlib20;
    }
}

export default GjsGiImports;


