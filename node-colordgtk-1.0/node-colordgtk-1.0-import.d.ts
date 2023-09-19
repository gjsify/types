
import ColordGtk10 from '@girs/node-colordgtk-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'ColordGtk', ver?: '1.0'): typeof ColordGtk10;
    }
}

export default NodeGtkGi;

