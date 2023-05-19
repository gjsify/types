
import Gtk40 from '@girs/gtk-4.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gtk', ver?: '4.0'): typeof Gtk40;
    }
}

export default NodeGtkGi;

