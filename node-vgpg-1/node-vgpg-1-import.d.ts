
import Vgpg1 from '@girs/vgpg-1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Vgpg', ver?: '1'): typeof Vgpg1;
    }
}

export default NodeGtkGi;

