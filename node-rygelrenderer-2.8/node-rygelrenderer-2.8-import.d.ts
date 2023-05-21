
import RygelRenderer28 from '@girs/node-rygelrenderer-2.8';

declare global {
    interface NodeGtkGi {
        require(ns: 'RygelRenderer', ver?: '2.8'): typeof RygelRenderer28;
    }
}

export default NodeGtkGi;

