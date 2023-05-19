
import ArrowCUDA10 from '@girs/arrowcuda-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'ArrowCUDA', ver?: '1.0'): typeof ArrowCUDA10;
    }
}

export default NodeGtkGi;

