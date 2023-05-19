
import Dazzle10 from '@girs/dazzle-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Dazzle', ver?: '1.0'): typeof Dazzle10;
    }
}

export default NodeGtkGi;

