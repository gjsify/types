
import DMAP30 from '@girs/dmap-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'DMAP', ver?: '3.0'): typeof DMAP30;
    }
}

export default NodeGtkGi;

