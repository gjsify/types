
import Mx10 from '@girs/mx-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Mx', ver?: '1.0'): typeof Mx10;
    }
}

export default NodeGtkGi;

