
import Gtef2 from '@girs/gtef-2';


declare global {
    export interface GjsGiImports {
        Gtef: typeof Gtef2;
    }
}

export default GjsGiImports;


