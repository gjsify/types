
import Clutter13 from '@girs/node-clutter-13';

declare global {
    interface NodeGtkGi {
        require(ns: 'Clutter', ver?: '13'): typeof Clutter13;
    }
}

export default NodeGtkGi;

