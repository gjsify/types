
import Cally10 from '@girs/cally-10';

declare global {
    export interface GjsGiImports {
        Cally: typeof Cally10;
    }
}

export default GjsGiImports;


