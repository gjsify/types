
import Uhm00 from '@girs/uhm-0.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Uhm', ver?: '0.0'): typeof Uhm00;
    }
}

export default NodeGtkGi;

