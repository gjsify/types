
import Gkbd30 from '@girs/node-gkbd-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gkbd', ver?: '3.0'): typeof Gkbd30;
    }
}

export default NodeGtkGi;

