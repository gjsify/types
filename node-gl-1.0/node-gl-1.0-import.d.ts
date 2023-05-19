
import GL10 from '@girs/gl-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GL', ver?: '1.0'): typeof GL10;
    }
}

export default NodeGtkGi;

