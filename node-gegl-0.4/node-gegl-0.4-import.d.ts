
import Gegl04 from '@girs/gegl-0.4';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gegl', ver?: '0.4'): typeof Gegl04;
    }
}

export default NodeGtkGi;

