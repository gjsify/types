
import GeocodeGlib from './geocodeglib-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        GeocodeGlib: typeof GeocodeGlib;
    }
}

export default GjsGiImports;


