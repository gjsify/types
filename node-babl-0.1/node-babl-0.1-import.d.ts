
import Babl01 from '@girs/node-babl-0.1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Babl', ver?: '0.1'): typeof Babl01;
    }
}

export default NodeGtkGi;

