
import Gda60 from '@girs/gda-6.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gda', ver?: '6.0'): typeof Gda60;
    }
}

export default NodeGtkGi;

