
import HarfBuzz from './harfbuzz-0.0.js';

declare global {
    export interface GjsGiImports {
        HarfBuzz: typeof HarfBuzz;
    }
}

export default GjsGiImports;


