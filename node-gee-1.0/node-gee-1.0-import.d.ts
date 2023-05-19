
import Gee10 from '@girs/gee-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gee', ver?: '1.0'): typeof Gee10;
    }
}

export default NodeGtkGi;

