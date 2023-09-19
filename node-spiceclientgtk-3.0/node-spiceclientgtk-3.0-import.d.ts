
import SpiceClientGtk30 from '@girs/node-spiceclientgtk-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'SpiceClientGtk', ver?: '3.0'): typeof SpiceClientGtk30;
    }
}

export default NodeGtkGi;

