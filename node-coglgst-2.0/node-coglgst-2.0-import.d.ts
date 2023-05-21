
import CoglGst20 from '@girs/node-coglgst-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'CoglGst', ver?: '2.0'): typeof CoglGst20;
    }
}

export default NodeGtkGi;

