
import GstVideo10 from '@girs/node-gstvideo-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstVideo', ver?: '1.0'): typeof GstVideo10;
    }
}

export default NodeGtkGi;

