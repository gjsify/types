
import Camel12 from '@girs/node-camel-1.2';

declare global {
    interface NodeGtkGi {
        require(ns: 'Camel', ver?: '1.2'): typeof Camel12;
    }
}

export default NodeGtkGi;

