
import GUPnPDLNA10 from '@girs/gupnpdlna-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GUPnPDLNA', ver?: '1.0'): typeof GUPnPDLNA10;
    }
}

export default NodeGtkGi;

