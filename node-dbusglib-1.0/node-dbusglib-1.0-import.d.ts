
import DBusGLib10 from '@girs/dbusglib-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'DBusGLib', ver?: '1.0'): typeof DBusGLib10;
    }
}

export default NodeGtkGi;

