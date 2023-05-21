
import Cheese30 from '@girs/node-cheese-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Cheese', ver?: '3.0'): typeof Cheese30;
    }
}

export default NodeGtkGi;

