
import GstGL10 from '@girs/gstgl-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstGL', ver?: '1.0'): typeof GstGL10;
    }
}

export default NodeGtkGi;

