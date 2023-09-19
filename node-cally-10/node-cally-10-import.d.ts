
import Cally10 from '@girs/node-cally-10';

declare global {
    interface NodeGtkGi {
        require(ns: 'Cally', ver?: '10'): typeof Cally10;
    }
}

export default NodeGtkGi;

