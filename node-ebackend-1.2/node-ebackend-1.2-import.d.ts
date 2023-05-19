
import EBackend12 from '@girs/ebackend-1.2';

declare global {
    interface NodeGtkGi {
        require(ns: 'EBackend', ver?: '1.2'): typeof EBackend12;
    }
}

export default NodeGtkGi;

