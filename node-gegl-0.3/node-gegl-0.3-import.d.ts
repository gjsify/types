
import Gegl03 from '@girs/node-gegl-0.3';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gegl', ver?: '0.3'): typeof Gegl03;
    }
}

export default NodeGtkGi;

