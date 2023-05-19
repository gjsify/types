
import Gtef2 from '@girs/gtef-2';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gtef', ver?: '2'): typeof Gtef2;
    }
}

export default NodeGtkGi;

