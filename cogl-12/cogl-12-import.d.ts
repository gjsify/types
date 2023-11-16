
import Cogl12 from '@girs/cogl-12';

declare global {
    export interface GjsGiImports {
        Cogl: typeof Cogl12;
    }
}

export default GjsGiImports;


