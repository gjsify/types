
import Vte291 from '@girs/vte-2.91';

declare global {
    interface NodeGtkGi {
        require(ns: 'Vte', ver?: '2.91'): typeof Vte291;
    }
}

export default NodeGtkGi;

