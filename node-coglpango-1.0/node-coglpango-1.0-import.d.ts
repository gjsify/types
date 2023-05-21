
import CoglPango10 from '@girs/node-coglpango-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'CoglPango', ver?: '1.0'): typeof CoglPango10;
    }
}

export default NodeGtkGi;

