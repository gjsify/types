
import CoglPango14 from '@girs/node-coglpango-14';

declare global {
    interface NodeGtkGi {
        require(ns: 'CoglPango', ver?: '14'): typeof CoglPango14;
    }
}

export default NodeGtkGi;

