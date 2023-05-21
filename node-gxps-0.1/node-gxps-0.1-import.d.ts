
import GXPS01 from '@girs/node-gxps-0.1';

declare global {
    interface NodeGtkGi {
        require(ns: 'GXPS', ver?: '0.1'): typeof GXPS01;
    }
}

export default NodeGtkGi;

