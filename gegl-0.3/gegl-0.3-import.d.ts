
import Gegl03 from '@girs/gegl-0.3';

declare global {
    export interface GjsGiImports {
        Gegl: typeof Gegl03;
    }
}

export default GjsGiImports;


