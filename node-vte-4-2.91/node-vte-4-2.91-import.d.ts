
import Vte4291 from '@girs/node-vte-4-2.91';

declare global {
    interface NodeGtkGi {
        require(ns: 'Vte', ver?: '4-2.91'): typeof Vte4291;
    }
}

export default NodeGtkGi;

