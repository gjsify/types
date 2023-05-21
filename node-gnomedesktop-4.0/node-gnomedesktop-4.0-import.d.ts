
import GnomeDesktop40 from '@girs/node-gnomedesktop-4.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GnomeDesktop', ver?: '4.0'): typeof GnomeDesktop40;
    }
}

export default NodeGtkGi;

