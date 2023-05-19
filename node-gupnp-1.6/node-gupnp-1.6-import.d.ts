
import GUPnP16 from '@girs/gupnp-1.6';

declare global {
    interface NodeGtkGi {
        require(ns: 'GUPnP', ver?: '1.6'): typeof GUPnP16;
    }
}

export default NodeGtkGi;

