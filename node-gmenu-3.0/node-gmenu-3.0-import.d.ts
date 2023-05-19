
import GMenu30 from '@girs/gmenu-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GMenu', ver?: '3.0'): typeof GMenu30;
    }
}

export default NodeGtkGi;

