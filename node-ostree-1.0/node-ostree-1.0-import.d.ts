
import OSTree10 from '@girs/node-ostree-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'OSTree', ver?: '1.0'): typeof OSTree10;
    }
}

export default NodeGtkGi;

