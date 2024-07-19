import GstRtspServer10 from '@girs/gstrtspserver-1.0';

declare global {
    export interface GjsGiImports {
        GstRtspServer: typeof GstRtspServer10;
    }
}

export default GjsGiImports;
