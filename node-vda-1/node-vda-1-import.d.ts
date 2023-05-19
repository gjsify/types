
import Vda1 from '@girs/vda-1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Vda', ver?: '1'): typeof Vda1;
    }
}

export default NodeGtkGi;

