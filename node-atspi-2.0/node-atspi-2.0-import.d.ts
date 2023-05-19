
import Atspi20 from '@girs/atspi-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Atspi', ver?: '2.0'): typeof Atspi20;
    }
}

export default NodeGtkGi;

