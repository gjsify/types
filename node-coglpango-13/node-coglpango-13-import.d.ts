
import CoglPango13 from '@girs/node-coglpango-13';

declare global {
    interface NodeGtkGi {
        require(ns: 'CoglPango', ver?: '13'): typeof CoglPango13;
    }
}

export default NodeGtkGi;

