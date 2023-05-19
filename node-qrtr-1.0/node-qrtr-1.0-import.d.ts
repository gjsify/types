
import Qrtr10 from '@girs/qrtr-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Qrtr', ver?: '1.0'): typeof Qrtr10;
    }
}

export default NodeGtkGi;

