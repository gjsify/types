
import Gvc10 from '@girs/node-gvc-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gvc', ver?: '1.0'): typeof Gvc10;
    }
}

export default NodeGtkGi;

