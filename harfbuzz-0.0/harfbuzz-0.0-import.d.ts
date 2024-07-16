
import HarfBuzz from './harfbuzz-0.0.d.ts';

declare global {
    export interface GjsGiImports {
        HarfBuzz: typeof HarfBuzz;
    }
}

export default GjsGiImports;


