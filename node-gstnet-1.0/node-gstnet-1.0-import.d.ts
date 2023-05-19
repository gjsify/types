
import GstNet10 from '@girs/gstnet-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstNet', ver?: '1.0'): typeof GstNet10;
    }
}

export default NodeGtkGi;

