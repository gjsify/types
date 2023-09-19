
import GstVideo010 from '@girs/node-gstvideo-0.10';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstVideo', ver?: '0.10'): typeof GstVideo010;
    }
}

export default NodeGtkGi;

