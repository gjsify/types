
import Gck2 from '@girs/node-gck-2';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gck', ver?: '2'): typeof Gck2;
    }
}

export default NodeGtkGi;

