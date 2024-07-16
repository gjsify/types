
import GstRtspServer from './gstrtspserver-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GstRtspServer: typeof GstRtspServer;
    }
}

export default GjsGiImports;


