
import Json10 from '@girs/node-json-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Json', ver?: '1.0'): typeof Json10;
    }
}

export default NodeGtkGi;

