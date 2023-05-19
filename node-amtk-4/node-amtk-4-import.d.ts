
import Amtk4 from '@girs/amtk-4';

declare global {
    interface NodeGtkGi {
        require(ns: 'Amtk', ver?: '4'): typeof Amtk4;
    }
}

export default NodeGtkGi;

