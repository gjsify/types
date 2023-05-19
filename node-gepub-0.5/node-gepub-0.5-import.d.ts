
import Gepub05 from '@girs/gepub-0.5';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gepub', ver?: '0.5'): typeof Gepub05;
    }
}

export default NodeGtkGi;

