
import Anthy9000 from '@girs/node-anthy-9000';

declare global {
    interface NodeGtkGi {
        require(ns: 'Anthy', ver?: '9000'): typeof Anthy9000;
    }
}

export default NodeGtkGi;

