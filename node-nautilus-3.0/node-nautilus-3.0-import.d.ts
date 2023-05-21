
import Nautilus30 from '@girs/node-nautilus-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Nautilus', ver?: '3.0'): typeof Nautilus30;
    }
}

export default NodeGtkGi;

