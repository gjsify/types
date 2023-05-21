
import Vgsl1 from '@girs/node-vgsl-1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Vgsl', ver?: '1'): typeof Vgsl1;
    }
}

export default NodeGtkGi;

