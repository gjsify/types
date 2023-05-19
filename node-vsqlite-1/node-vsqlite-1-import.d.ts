
import Vsqlite1 from '@girs/vsqlite-1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Vsqlite', ver?: '1'): typeof Vsqlite1;
    }
}

export default NodeGtkGi;

