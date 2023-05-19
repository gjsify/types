
import Gandiva10 from '@girs/gandiva-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gandiva', ver?: '1.0'): typeof Gandiva10;
    }
}

export default NodeGtkGi;

