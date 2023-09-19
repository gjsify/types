
import Atk10 from '@girs/node-atk-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Atk', ver?: '1.0'): typeof Atk10;
    }
}

export default NodeGtkGi;

