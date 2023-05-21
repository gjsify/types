
import Vpg1 from '@girs/node-vpg-1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Vpg', ver?: '1'): typeof Vpg1;
    }
}

export default NodeGtkGi;

