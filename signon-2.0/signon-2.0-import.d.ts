
import Signon20 from '@girs/signon-2.0';


declare global {
    export interface GjsGiImports {
        Signon: typeof Signon20;
    }
}

export default GjsGiImports;


