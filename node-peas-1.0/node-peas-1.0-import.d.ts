
import Peas10 from '@girs/node-peas-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Peas', ver?: '1.0'): typeof Peas10;
    }
}

export default NodeGtkGi;

