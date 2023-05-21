
import GtkClutter10 from '@girs/node-gtkclutter-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GtkClutter', ver?: '1.0'): typeof GtkClutter10;
    }
}

export default NodeGtkGi;

