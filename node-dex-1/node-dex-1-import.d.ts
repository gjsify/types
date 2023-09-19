
import Dex1 from '@girs/node-dex-1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Dex', ver?: '1'): typeof Dex1;
    }
}

export default NodeGtkGi;

