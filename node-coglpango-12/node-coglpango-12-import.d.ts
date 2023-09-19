
import CoglPango12 from '@girs/node-coglpango-12';

declare global {
    interface NodeGtkGi {
        require(ns: 'CoglPango', ver?: '12'): typeof CoglPango12;
    }
}

export default NodeGtkGi;

