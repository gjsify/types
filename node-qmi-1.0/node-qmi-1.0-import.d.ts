
import Qmi10 from '@girs/qmi-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Qmi', ver?: '1.0'): typeof Qmi10;
    }
}

export default NodeGtkGi;

