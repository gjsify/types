
import EDataBook12 from '@girs/edatabook-1.2';

declare global {
    interface NodeGtkGi {
        require(ns: 'EDataBook', ver?: '1.2'): typeof EDataBook12;
    }
}

export default NodeGtkGi;

