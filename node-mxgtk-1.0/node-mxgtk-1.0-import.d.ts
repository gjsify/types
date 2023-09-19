
import MxGtk10 from '@girs/node-mxgtk-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'MxGtk', ver?: '1.0'): typeof MxGtk10;
    }
}

export default NodeGtkGi;

