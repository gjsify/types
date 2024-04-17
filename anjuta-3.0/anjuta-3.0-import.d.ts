
import Anjuta30 from '@girs/anjuta-3.0';

declare global {
    export interface GjsGiImports {
        Anjuta: typeof Anjuta30;
    }
}

export default GjsGiImports;


