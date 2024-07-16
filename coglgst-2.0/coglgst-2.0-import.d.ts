
import CoglGst from './coglgst-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        CoglGst: typeof CoglGst;
    }
}

export default GjsGiImports;


