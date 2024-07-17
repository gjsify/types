
import Bamf3 from '@girs/bamf-3';

declare global {
    export interface GjsGiImports {
        Bamf: typeof Bamf3;
    }
}

export default GjsGiImports;


