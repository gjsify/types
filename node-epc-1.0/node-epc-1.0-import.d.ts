
import Epc10 from '@girs/node-epc-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Epc', ver?: '1.0'): typeof Epc10;
    }
}

export default NodeGtkGi;

