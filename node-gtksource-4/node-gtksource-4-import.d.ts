
import GtkSource4 from '@girs/node-gtksource-4';

declare global {
    interface NodeGtkGi {
        require(ns: 'GtkSource', ver?: '4'): typeof GtkSource4;
    }
}

export default NodeGtkGi;

