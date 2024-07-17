
import GstRtspServer from './gstrtspserver-1.0.js';

declare global {
    export interface GjsGiImports {
        GstRtspServer: typeof GstRtspServer;
    }
}

export default GjsGiImports;


