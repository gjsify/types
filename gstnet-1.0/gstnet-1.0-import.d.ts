
import GstNet from './gstnet-1.0.js';

declare global {
    export interface GjsGiImports {
        GstNet: typeof GstNet;
    }
}

export default GjsGiImports;


