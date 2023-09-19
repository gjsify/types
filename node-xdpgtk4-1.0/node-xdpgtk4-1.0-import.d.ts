
import XdpGtk410 from '@girs/node-xdpgtk4-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'XdpGtk4', ver?: '1.0'): typeof XdpGtk410;
    }
}

export default NodeGtkGi;

