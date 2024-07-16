
import GstRtsp from './gstrtsp-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GstRtsp: typeof GstRtsp;
    }
}

export default GjsGiImports;


