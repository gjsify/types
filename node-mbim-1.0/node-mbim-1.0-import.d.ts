
import Mbim10 from '@girs/mbim-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Mbim', ver?: '1.0'): typeof Mbim10;
    }
}

export default NodeGtkGi;

