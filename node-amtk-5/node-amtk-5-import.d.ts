
import Amtk5 from '@girs/node-amtk-5';

declare global {
    interface NodeGtkGi {
        require(ns: 'Amtk', ver?: '5'): typeof Amtk5;
    }
}

export default NodeGtkGi;

