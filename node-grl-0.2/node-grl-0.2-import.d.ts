
import Grl02 from '@girs/grl-0.2';

declare global {
    interface NodeGtkGi {
        require(ns: 'Grl', ver?: '0.2'): typeof Grl02;
    }
}

export default NodeGtkGi;

