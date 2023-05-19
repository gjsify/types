
import Anjuta30 from '@girs/anjuta-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Anjuta', ver?: '3.0'): typeof Anjuta30;
    }
}

export default NodeGtkGi;

