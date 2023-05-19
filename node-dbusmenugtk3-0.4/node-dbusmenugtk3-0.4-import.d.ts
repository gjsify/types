
import DbusmenuGtk304 from '@girs/dbusmenugtk3-0.4';

declare global {
    interface NodeGtkGi {
        require(ns: 'DbusmenuGtk3', ver?: '0.4'): typeof DbusmenuGtk304;
    }
}

export default NodeGtkGi;

