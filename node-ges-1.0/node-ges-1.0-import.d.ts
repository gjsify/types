
import GES10 from '@girs/ges-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GES', ver?: '1.0'): typeof GES10;
    }
}

export default NodeGtkGi;

