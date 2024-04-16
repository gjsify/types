
import P11Kit10 from '@girs/p11kit-1.0';


declare global {
    export interface GjsGiImports {
        P11Kit: typeof P11Kit10;
    }
}

export default GjsGiImports;


