
import Libmsi10 from '@girs/libmsi-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Libmsi', ver?: '1.0'): typeof Libmsi10;
    }
}

export default NodeGtkGi;

