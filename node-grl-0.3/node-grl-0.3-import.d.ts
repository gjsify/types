
import Grl03 from '@girs/grl-0.3';

declare global {
    interface NodeGtkGi {
        require(ns: 'Grl', ver?: '0.3'): typeof Grl03;
    }
}

export default NodeGtkGi;

