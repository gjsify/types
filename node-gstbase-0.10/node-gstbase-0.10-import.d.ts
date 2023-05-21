
import GstBase010 from '@girs/node-gstbase-0.10';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstBase', ver?: '0.10'): typeof GstBase010;
    }
}

export default NodeGtkGi;

