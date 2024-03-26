
import Cogl14 from '@girs/node-cogl-14';

declare global {
    interface NodeGtkGi {
        require(ns: 'Cogl', ver?: '14'): typeof Cogl14;
    }
}

export default NodeGtkGi;

