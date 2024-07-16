
import Babl from './babl-0.1.d.ts';

declare global {
    export interface GjsGiImports {
        Babl: typeof Babl;
    }
}

export default GjsGiImports;


