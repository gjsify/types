
import GstCheck10 from '@girs/gstcheck-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstCheck', ver?: '1.0'): typeof GstCheck10;
    }
}

export default NodeGtkGi;

