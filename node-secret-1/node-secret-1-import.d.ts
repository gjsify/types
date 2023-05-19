
import Secret1 from '@girs/secret-1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Secret', ver?: '1'): typeof Secret1;
    }
}

export default NodeGtkGi;

