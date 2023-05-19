
import Gcr3 from '@girs/gcr-3';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gcr', ver?: '3'): typeof Gcr3;
    }
}

export default NodeGtkGi;

