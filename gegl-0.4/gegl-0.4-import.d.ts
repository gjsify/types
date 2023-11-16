
import Gegl04 from '@girs/gegl-0.4';

declare global {
    export interface GjsGiImports {
        Gegl: typeof Gegl04;
    }
}

export default GjsGiImports;


