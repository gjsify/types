
import Gdk30 from '@girs/gdk-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gdk', ver?: '3.0'): typeof Gdk30;
    }
}

export default NodeGtkGi;

