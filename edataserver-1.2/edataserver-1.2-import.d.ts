
import EDataServer12 from '@girs/edataserver-1.2';


declare global {
    export interface GjsGiImports {
        EDataServer: typeof EDataServer12;
    }
}

export default GjsGiImports;


