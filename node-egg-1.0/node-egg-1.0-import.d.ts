
import Egg10 from '@girs/node-egg-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Egg', ver?: '1.0'): typeof Egg10;
    }
}

export default NodeGtkGi;

