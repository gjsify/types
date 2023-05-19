
import Clutter12 from '@girs/clutter-12';

declare global {
    interface NodeGtkGi {
        require(ns: 'Clutter', ver?: '12'): typeof Clutter12;
    }
}

export default NodeGtkGi;

