
import IBus10 from '@girs/node-ibus-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'IBus', ver?: '1.0'): typeof IBus10;
    }
}

export default NodeGtkGi;

