
import Peas2 from '@girs/node-peas-2';

declare global {
    interface NodeGtkGi {
        require(ns: 'Peas', ver?: '2'): typeof Peas2;
    }
}

export default NodeGtkGi;

