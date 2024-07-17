
import GstWebRTC from './gstwebrtc-1.0.js';

declare global {
    export interface GjsGiImports {
        GstWebRTC: typeof GstWebRTC;
    }
}

export default GjsGiImports;


