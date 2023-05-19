
import TotemPlParser10 from '@girs/totemplparser-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'TotemPlParser', ver?: '1.0'): typeof TotemPlParser10;
    }
}

export default NodeGtkGi;

