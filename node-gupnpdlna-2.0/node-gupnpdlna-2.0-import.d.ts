
import GUPnPDLNA20 from '@girs/node-gupnpdlna-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GUPnPDLNA', ver?: '2.0'): typeof GUPnPDLNA20;
    }
}

export default NodeGtkGi;

