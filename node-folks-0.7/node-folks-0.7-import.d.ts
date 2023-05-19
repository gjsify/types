
import Folks07 from '@girs/folks-0.7';

declare global {
    interface NodeGtkGi {
        require(ns: 'Folks', ver?: '0.7'): typeof Folks07;
    }
}

export default NodeGtkGi;

