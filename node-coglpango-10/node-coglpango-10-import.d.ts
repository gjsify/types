
import CoglPango10 from '@girs/node-coglpango-10';

declare global {
    interface NodeGtkGi {
        require(ns: 'CoglPango', ver?: '10'): typeof CoglPango10;
    }
}

export default NodeGtkGi;

