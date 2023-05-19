
import IAnjuta30 from '@girs/ianjuta-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'IAnjuta', ver?: '3.0'): typeof IAnjuta30;
    }
}

export default NodeGtkGi;

