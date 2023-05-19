
import GtkSource5 from '@girs/gtksource-5';

declare global {
    interface NodeGtkGi {
        require(ns: 'GtkSource', ver?: '5'): typeof GtkSource5;
    }
}

export default NodeGtkGi;

