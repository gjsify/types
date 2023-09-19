
import GUPnPIgd10 from '@girs/node-gupnpigd-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GUPnPIgd', ver?: '1.0'): typeof GUPnPIgd10;
    }
}

export default NodeGtkGi;

