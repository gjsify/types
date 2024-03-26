
import Cally14 from '@girs/node-cally-14';

declare global {
    interface NodeGtkGi {
        require(ns: 'Cally', ver?: '14'): typeof Cally14;
    }
}

export default NodeGtkGi;

