
import GstWebRTC10 from '@girs/node-gstwebrtc-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstWebRTC', ver?: '1.0'): typeof GstWebRTC10;
    }
}

export default NodeGtkGi;

