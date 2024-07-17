
import GstSdp from './gstsdp-1.0.js';

declare global {
    export interface GjsGiImports {
        GstSdp: typeof GstSdp;
    }
}

export default GjsGiImports;


