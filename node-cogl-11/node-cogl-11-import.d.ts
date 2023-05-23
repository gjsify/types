
import Cogl11 from '@girs/node-cogl-11';

declare global {
    interface NodeGtkGi {
        require(ns: 'Cogl', ver?: '11'): typeof Cogl11;
    }
}

export default NodeGtkGi;

