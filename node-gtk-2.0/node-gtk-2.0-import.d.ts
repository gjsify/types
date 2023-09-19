
import Gtk20 from '@girs/node-gtk-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gtk', ver?: '2.0'): typeof Gtk20;
    }
}

export default NodeGtkGi;

