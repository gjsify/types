
import Gsk40 from '@girs/gsk-4.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gsk', ver?: '4.0'): typeof Gsk40;
    }
}

export default NodeGtkGi;

