
import Xdp10 from '@girs/xdp-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Xdp', ver?: '1.0'): typeof Xdp10;
    }
}

export default NodeGtkGi;

