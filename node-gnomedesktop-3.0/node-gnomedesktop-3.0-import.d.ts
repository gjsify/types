
import GnomeDesktop30 from '@girs/node-gnomedesktop-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GnomeDesktop', ver?: '3.0'): typeof GnomeDesktop30;
    }
}

export default NodeGtkGi;

