
import Clutter10 from '@girs/node-clutter-10';

declare global {
    interface NodeGtkGi {
        require(ns: 'Clutter', ver?: '10'): typeof Clutter10;
    }
}

export default NodeGtkGi;

