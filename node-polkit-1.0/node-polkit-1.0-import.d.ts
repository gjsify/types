
import Polkit10 from '@girs/node-polkit-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Polkit', ver?: '1.0'): typeof Polkit10;
    }
}

export default NodeGtkGi;

