
import Gcr4 from '@girs/gcr-4';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gcr', ver?: '4'): typeof Gcr4;
    }
}

export default NodeGtkGi;

