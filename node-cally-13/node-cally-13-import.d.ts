
import Cally13 from '@girs/node-cally-13';

declare global {
    interface NodeGtkGi {
        require(ns: 'Cally', ver?: '13'): typeof Cally13;
    }
}

export default NodeGtkGi;

