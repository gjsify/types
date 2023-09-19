
import Vsqlite1 from '@girs/node-vsqlite-1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Vsqlite', ver?: '1'): typeof Vsqlite1;
    }
}

export default NodeGtkGi;

