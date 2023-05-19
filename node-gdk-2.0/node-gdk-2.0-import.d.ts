
import Gdk20 from '@girs/gdk-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gdk', ver?: '2.0'): typeof Gdk20;
    }
}

export default NodeGtkGi;

