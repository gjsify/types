
import GSignond10 from '@girs/node-gsignond-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GSignond', ver?: '1.0'): typeof GSignond10;
    }
}

export default NodeGtkGi;

