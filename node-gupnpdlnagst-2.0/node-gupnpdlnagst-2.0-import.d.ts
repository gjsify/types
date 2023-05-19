
import GUPnPDLNAGst20 from '@girs/gupnpdlnagst-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GUPnPDLNAGst', ver?: '2.0'): typeof GUPnPDLNAGst20;
    }
}

export default NodeGtkGi;

