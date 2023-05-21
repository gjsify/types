
import Gedit30 from '@girs/node-gedit-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gedit', ver?: '3.0'): typeof Gedit30;
    }
}

export default NodeGtkGi;

