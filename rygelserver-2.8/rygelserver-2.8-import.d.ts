
import RygelServer28 from '@girs/rygelserver-2.8';


declare global {
    export interface GjsGiImports {
        RygelServer: typeof RygelServer28;
    }
}

export default GjsGiImports;


