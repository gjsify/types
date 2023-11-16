
import Cogl10 from '@girs/cogl-1.0';

declare global {
    export interface GjsGiImports {
        Cogl: typeof Cogl10;
    }
}

export default GjsGiImports;


