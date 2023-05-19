
import GtkSource30 from '@girs/gtksource-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GtkSource', ver?: '3.0'): typeof GtkSource30;
    }
}

export default NodeGtkGi;

