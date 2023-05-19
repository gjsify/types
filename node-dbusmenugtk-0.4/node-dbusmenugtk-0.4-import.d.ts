
import DbusmenuGtk04 from '@girs/dbusmenugtk-0.4';

declare global {
    interface NodeGtkGi {
        require(ns: 'DbusmenuGtk', ver?: '0.4'): typeof DbusmenuGtk04;
    }
}

export default NodeGtkGi;

