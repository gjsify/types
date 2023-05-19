
import Ggit10 from '@girs/ggit-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Ggit', ver?: '1.0'): typeof Ggit10;
    }
}

export default NodeGtkGi;

