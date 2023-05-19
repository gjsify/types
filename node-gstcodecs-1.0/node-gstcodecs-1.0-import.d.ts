
import GstCodecs10 from '@girs/gstcodecs-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstCodecs', ver?: '1.0'): typeof GstCodecs10;
    }
}

export default NodeGtkGi;

