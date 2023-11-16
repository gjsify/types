
import Cogl10 from '@girs/cogl-10';

declare global {
    export interface GjsGiImports {
        Cogl: typeof Cogl10;
    }
}

export default GjsGiImports;


