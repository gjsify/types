
import GstRtsp10 from '@girs/node-gstrtsp-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstRtsp', ver?: '1.0'): typeof GstRtsp10;
    }
}

export default NodeGtkGi;

