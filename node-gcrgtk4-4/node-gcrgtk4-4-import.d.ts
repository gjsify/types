
import GcrGtk44 from '@girs/gcrgtk4-4';

declare global {
    interface NodeGtkGi {
        require(ns: 'GcrGtk4', ver?: '4'): typeof GcrGtk44;
    }
}

export default NodeGtkGi;

