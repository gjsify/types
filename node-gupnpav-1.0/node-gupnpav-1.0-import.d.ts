
import GUPnPAV10 from '@girs/gupnpav-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GUPnPAV', ver?: '1.0'): typeof GUPnPAV10;
    }
}

export default NodeGtkGi;

