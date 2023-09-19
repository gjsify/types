
import Cally12 from '@girs/node-cally-12';

declare global {
    interface NodeGtkGi {
        require(ns: 'Cally', ver?: '12'): typeof Cally12;
    }
}

export default NodeGtkGi;

