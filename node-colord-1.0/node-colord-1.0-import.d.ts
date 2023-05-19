
import Colord10 from '@girs/colord-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Colord', ver?: '1.0'): typeof Colord10;
    }
}

export default NodeGtkGi;

