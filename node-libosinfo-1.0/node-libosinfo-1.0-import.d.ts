
import Libosinfo10 from '@girs/node-libosinfo-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Libosinfo', ver?: '1.0'): typeof Libosinfo10;
    }
}

export default NodeGtkGi;

