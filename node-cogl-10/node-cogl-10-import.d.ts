
import Cogl10 from '@girs/node-cogl-10';

declare global {
    interface NodeGtkGi {
        require(ns: 'Cogl', ver?: '10'): typeof Cogl10;
    }
}

export default NodeGtkGi;

