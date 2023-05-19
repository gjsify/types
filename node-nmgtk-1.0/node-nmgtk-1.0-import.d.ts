
import NMGtk10 from '@girs/nmgtk-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'NMGtk', ver?: '1.0'): typeof NMGtk10;
    }
}

export default NodeGtkGi;

