
import Goa10 from '@girs/goa-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Goa', ver?: '1.0'): typeof Goa10;
    }
}

export default NodeGtkGi;

