
import GcrGtk34 from '@girs/gcrgtk3-4';

declare global {
    interface NodeGtkGi {
        require(ns: 'GcrGtk3', ver?: '4'): typeof GcrGtk34;
    }
}

export default NodeGtkGi;

