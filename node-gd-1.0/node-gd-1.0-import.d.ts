
import Gd10 from '@girs/gd-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gd', ver?: '1.0'): typeof Gd10;
    }
}

export default NodeGtkGi;

