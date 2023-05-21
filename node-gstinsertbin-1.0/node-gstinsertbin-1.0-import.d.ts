
import GstInsertBin10 from '@girs/node-gstinsertbin-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstInsertBin', ver?: '1.0'): typeof GstInsertBin10;
    }
}

export default NodeGtkGi;

