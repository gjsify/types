
import GtkChamplain012 from '@girs/node-gtkchamplain-0.12';

declare global {
    interface NodeGtkGi {
        require(ns: 'GtkChamplain', ver?: '0.12'): typeof GtkChamplain012;
    }
}

export default NodeGtkGi;

