
import GLib20 from '@girs/node-glib-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GLib', ver?: '2.0'): typeof GLib20;
    }
}

export default NodeGtkGi;

