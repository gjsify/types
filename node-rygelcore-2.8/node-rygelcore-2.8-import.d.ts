
import RygelCore28 from '@girs/node-rygelcore-2.8';

declare global {
    interface NodeGtkGi {
        require(ns: 'RygelCore', ver?: '2.8'): typeof RygelCore28;
    }
}

export default NodeGtkGi;

