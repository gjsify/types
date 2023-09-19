
import GUPnP12 from '@girs/node-gupnp-1.2';

declare global {
    interface NodeGtkGi {
        require(ns: 'GUPnP', ver?: '1.2'): typeof GUPnP12;
    }
}

export default NodeGtkGi;

