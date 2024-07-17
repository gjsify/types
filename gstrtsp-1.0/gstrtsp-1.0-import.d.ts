
import GstRtsp from './gstrtsp-1.0.js';

declare global {
    export interface GjsGiImports {
        GstRtsp: typeof GstRtsp;
    }
}

export default GjsGiImports;


