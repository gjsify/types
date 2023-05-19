
import Dee10 from '@girs/dee-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Dee', ver?: '1.0'): typeof Dee10;
    }
}

export default NodeGtkGi;

