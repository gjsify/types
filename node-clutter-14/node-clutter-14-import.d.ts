
import Clutter14 from '@girs/node-clutter-14';

declare global {
    interface NodeGtkGi {
        require(ns: 'Clutter', ver?: '14'): typeof Clutter14;
    }
}

export default NodeGtkGi;

