
import PeasGtk10 from '@girs/node-peasgtk-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'PeasGtk', ver?: '1.0'): typeof PeasGtk10;
    }
}

export default NodeGtkGi;

