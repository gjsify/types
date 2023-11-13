
import Cogl13 from '@girs/node-cogl-13';

declare global {
    interface NodeGtkGi {
        require(ns: 'Cogl', ver?: '13'): typeof Cogl13;
    }
}

export default NodeGtkGi;

