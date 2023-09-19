
import GnomeAutoar01 from '@girs/node-gnomeautoar-0.1';

declare global {
    interface NodeGtkGi {
        require(ns: 'GnomeAutoar', ver?: '0.1'): typeof GnomeAutoar01;
    }
}

export default NodeGtkGi;

