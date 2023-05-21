
import Jsonrpc10 from '@girs/node-jsonrpc-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Jsonrpc', ver?: '1.0'): typeof Jsonrpc10;
    }
}

export default NodeGtkGi;

