
import Folks06 from '@girs/folks-0.6';

declare global {
    interface NodeGtkGi {
        require(ns: 'Folks', ver?: '0.6'): typeof Folks06;
    }
}

export default NodeGtkGi;

