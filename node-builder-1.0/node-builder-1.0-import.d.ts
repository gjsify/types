
import Builder10 from '@girs/builder-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Builder', ver?: '1.0'): typeof Builder10;
    }
}

export default NodeGtkGi;

