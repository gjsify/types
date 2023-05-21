
import Gandiva10 from '@girs/node-gandiva-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gandiva', ver?: '1.0'): typeof Gandiva10;
    }
}

export default NodeGtkGi;

