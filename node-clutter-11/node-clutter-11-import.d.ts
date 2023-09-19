
import Clutter11 from '@girs/node-clutter-11';

declare global {
    interface NodeGtkGi {
        require(ns: 'Clutter', ver?: '11'): typeof Clutter11;
    }
}

export default NodeGtkGi;

