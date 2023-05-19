
import Fontconfig20 from '@girs/fontconfig-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'fontconfig', ver?: '2.0'): typeof Fontconfig20;
    }
}

export default NodeGtkGi;

