
import Clutter10 from '@girs/clutter-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Clutter', ver?: '1.0'): typeof Clutter10;
    }
}

export default NodeGtkGi;

