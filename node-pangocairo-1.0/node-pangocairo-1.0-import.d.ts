
import PangoCairo10 from '@girs/pangocairo-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'PangoCairo', ver?: '1.0'): typeof PangoCairo10;
    }
}

export default NodeGtkGi;

