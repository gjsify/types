
import Cogl11 from '@girs/cogl-11';

declare global {
    export interface GjsGiImports {
        Cogl: typeof Cogl11;
    }
}

export default GjsGiImports;


