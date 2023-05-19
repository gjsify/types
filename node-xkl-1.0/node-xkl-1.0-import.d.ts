
import Xkl10 from '@girs/xkl-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Xkl', ver?: '1.0'): typeof Xkl10;
    }
}

export default NodeGtkGi;

