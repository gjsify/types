
import Bamf3 from '@girs/bamf-3';

declare global {
    interface NodeGtkGi {
        require(ns: 'Bamf', ver?: '3'): typeof Bamf3;
    }
}

export default NodeGtkGi;

