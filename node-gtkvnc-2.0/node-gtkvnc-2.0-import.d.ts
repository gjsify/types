
import GtkVnc20 from '@girs/gtkvnc-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GtkVnc', ver?: '2.0'): typeof GtkVnc20;
    }
}

export default NodeGtkGi;

