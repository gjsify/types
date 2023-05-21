
import GObject20 from '@girs/node-gobject-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GObject', ver?: '2.0'): typeof GObject20;
    }
}

export default NodeGtkGi;

