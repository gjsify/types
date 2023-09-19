
import Gxps10 from '@girs/node-gxps-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gxps', ver?: '1.0'): typeof Gxps10;
    }
}

export default NodeGtkGi;

