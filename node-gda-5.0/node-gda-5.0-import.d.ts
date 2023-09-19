
import Gda50 from '@girs/node-gda-5.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gda', ver?: '5.0'): typeof Gda50;
    }
}

export default NodeGtkGi;

