
import ModemManager10 from '@girs/modemmanager-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'ModemManager', ver?: '1.0'): typeof ModemManager10;
    }
}

export default NodeGtkGi;

