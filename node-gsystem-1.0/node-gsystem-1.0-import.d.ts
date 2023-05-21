
import GSystem10 from '@girs/node-gsystem-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GSystem', ver?: '1.0'): typeof GSystem10;
    }
}

export default NodeGtkGi;

