
import GUsb10 from '@girs/gusb-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GUsb', ver?: '1.0'): typeof GUsb10;
    }
}

export default NodeGtkGi;

