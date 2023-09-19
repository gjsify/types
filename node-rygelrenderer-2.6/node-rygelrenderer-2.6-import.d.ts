
import RygelRenderer26 from '@girs/node-rygelrenderer-2.6';

declare global {
    interface NodeGtkGi {
        require(ns: 'RygelRenderer', ver?: '2.6'): typeof RygelRenderer26;
    }
}

export default NodeGtkGi;

