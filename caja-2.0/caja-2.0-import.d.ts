
import Caja20 from '@girs/caja-2.0';

declare global {
    export interface GjsGiImports {
        Caja: typeof Caja20;
    }
}

export default GjsGiImports;


