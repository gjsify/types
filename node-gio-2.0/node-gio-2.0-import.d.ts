
import Gio20 from '@girs/node-gio-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gio', ver?: '2.0'): typeof Gio20;
    }
}

export default NodeGtkGi;

