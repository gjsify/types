
import Gee08 from '@girs/gee-0.8';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gee', ver?: '0.8'): typeof Gee08;
    }
}

export default NodeGtkGi;

