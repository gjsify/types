
import XdpGtk310 from '@girs/xdpgtk3-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'XdpGtk3', ver?: '1.0'): typeof XdpGtk310;
    }
}

export default NodeGtkGi;

