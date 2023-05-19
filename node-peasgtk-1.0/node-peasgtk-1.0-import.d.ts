
import PeasGtk10 from '@girs/peasgtk-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'PeasGtk', ver?: '1.0'): typeof PeasGtk10;
    }
}

export default NodeGtkGi;

