
import Caribou10 from '@girs/node-caribou-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Caribou', ver?: '1.0'): typeof Caribou10;
    }
}

export default NodeGtkGi;

