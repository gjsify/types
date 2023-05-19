
import NMA10 from '@girs/nma-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'NMA', ver?: '1.0'): typeof NMA10;
    }
}

export default NodeGtkGi;

