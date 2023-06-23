
import Vte391 from '@girs/node-vte-3.91';

declare global {
    interface NodeGtkGi {
        require(ns: 'Vte', ver?: '3.91'): typeof Vte391;
    }
}

export default NodeGtkGi;

