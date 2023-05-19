
import GUPnP10 from '@girs/gupnp-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GUPnP', ver?: '1.0'): typeof GUPnP10;
    }
}

export default NodeGtkGi;

