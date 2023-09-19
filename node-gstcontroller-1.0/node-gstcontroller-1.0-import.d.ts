
import GstController10 from '@girs/node-gstcontroller-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstController', ver?: '1.0'): typeof GstController10;
    }
}

export default NodeGtkGi;

