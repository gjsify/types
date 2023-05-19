
import Cally10 from '@girs/cally-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Cally', ver?: '1.0'): typeof Cally10;
    }
}

export default NodeGtkGi;

