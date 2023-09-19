
import GstApp10 from '@girs/node-gstapp-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstApp', ver?: '1.0'): typeof GstApp10;
    }
}

export default NodeGtkGi;

