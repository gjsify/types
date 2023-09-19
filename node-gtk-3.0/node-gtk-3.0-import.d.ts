
import Gtk30 from '@girs/node-gtk-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gtk', ver?: '3.0'): typeof Gtk30;
    }
}

export default NodeGtkGi;

