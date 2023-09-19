
import Cogl12 from '@girs/node-cogl-12';

declare global {
    interface NodeGtkGi {
        require(ns: 'Cogl', ver?: '12'): typeof Cogl12;
    }
}

export default NodeGtkGi;

