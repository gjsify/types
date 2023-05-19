
import DBus10 from '@girs/dbus-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'DBus', ver?: '1.0'): typeof DBus10;
    }
}

export default NodeGtkGi;

