
import Gck1 from '@girs/node-gck-1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gck', ver?: '1'): typeof Gck1;
    }
}

export default NodeGtkGi;

