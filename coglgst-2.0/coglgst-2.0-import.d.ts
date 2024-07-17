
import CoglGst from './coglgst-2.0.js';

declare global {
    export interface GjsGiImports {
        CoglGst: typeof CoglGst;
    }
}

export default GjsGiImports;


