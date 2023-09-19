
import Cally11 from '@girs/node-cally-11';

declare global {
    interface NodeGtkGi {
        require(ns: 'Cally', ver?: '11'): typeof Cally11;
    }
}

export default NodeGtkGi;

