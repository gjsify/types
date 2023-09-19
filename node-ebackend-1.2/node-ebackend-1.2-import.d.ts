
import EBackend12 from '@girs/node-ebackend-1.2';

declare global {
    interface NodeGtkGi {
        require(ns: 'EBackend', ver?: '1.2'): typeof EBackend12;
    }
}

export default NodeGtkGi;

