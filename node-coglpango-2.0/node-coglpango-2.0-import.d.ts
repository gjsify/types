
import CoglPango20 from '@girs/node-coglpango-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'CoglPango', ver?: '2.0'): typeof CoglPango20;
    }
}

export default NodeGtkGi;

