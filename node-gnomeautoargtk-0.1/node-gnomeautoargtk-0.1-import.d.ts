
import GnomeAutoarGtk01 from '@girs/node-gnomeautoargtk-0.1';

declare global {
    interface NodeGtkGi {
        require(ns: 'GnomeAutoarGtk', ver?: '0.1'): typeof GnomeAutoarGtk01;
    }
}

export default NodeGtkGi;

