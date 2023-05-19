
import Vgda1 from '@girs/vgda-1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Vgda', ver?: '1'): typeof Vgda1;
    }
}

export default NodeGtkGi;

