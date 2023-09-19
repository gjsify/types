
import GstBase10 from '@girs/node-gstbase-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstBase', ver?: '1.0'): typeof GstBase10;
    }
}

export default NodeGtkGi;

