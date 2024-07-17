
import GstWebRTC10 from '@girs/gstwebrtc-1.0';

declare global {
    export interface GjsGiImports {
        GstWebRTC: typeof GstWebRTC10;
    }
}

export default GjsGiImports;


