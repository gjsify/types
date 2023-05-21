
import GstRtspServer10 from '@girs/node-gstrtspserver-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstRtspServer', ver?: '1.0'): typeof GstRtspServer10;
    }
}

export default NodeGtkGi;

