
import CoglGst20 from '@girs/coglgst-2.0';


declare global {
    export interface GjsGiImports {
        CoglGst: typeof CoglGst20;
    }
}

export default GjsGiImports;


