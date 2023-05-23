
import CoglPango11 from '@girs/node-coglpango-11';

declare global {
    interface NodeGtkGi {
        require(ns: 'CoglPango', ver?: '11'): typeof CoglPango11;
    }
}

export default NodeGtkGi;

