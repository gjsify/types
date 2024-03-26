
import GioUnix20 from '@girs/node-giounix-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GioUnix', ver?: '2.0'): typeof GioUnix20;
    }
}

export default NodeGtkGi;

