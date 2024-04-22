
import GstClapper10 from '@girs/gstclapper-1.0';

declare global {
    export interface GjsGiImports {
        GstClapper: typeof GstClapper10;
    }
}

export default GjsGiImports;


