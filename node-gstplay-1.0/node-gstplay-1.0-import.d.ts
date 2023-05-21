
import GstPlay10 from '@girs/node-gstplay-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstPlay', ver?: '1.0'): typeof GstPlay10;
    }
}

export default NodeGtkGi;

