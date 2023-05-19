
import Grl01 from '@girs/grl-0.1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Grl', ver?: '0.1'): typeof Grl01;
    }
}

export default NodeGtkGi;

