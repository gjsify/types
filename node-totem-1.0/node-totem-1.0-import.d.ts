
import Totem10 from '@girs/totem-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Totem', ver?: '1.0'): typeof Totem10;
    }
}

export default NodeGtkGi;

