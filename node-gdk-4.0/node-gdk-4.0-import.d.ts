
import Gdk40 from '@girs/node-gdk-4.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gdk', ver?: '4.0'): typeof Gdk40;
    }
}

export default NodeGtkGi;

