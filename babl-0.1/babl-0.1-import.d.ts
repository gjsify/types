
import Babl from './babl-0.1.js';

declare global {
    export interface GjsGiImports {
        Babl: typeof Babl;
    }
}

export default GjsGiImports;


