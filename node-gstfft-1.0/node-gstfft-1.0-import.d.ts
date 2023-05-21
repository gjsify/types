
import GstFft10 from '@girs/node-gstfft-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstFft', ver?: '1.0'): typeof GstFft10;
    }
}

export default NodeGtkGi;

