
import Retro014 from '@girs/retro-0.14';

declare global {
    interface NodeGtkGi {
        require(ns: 'Retro', ver?: '0.14'): typeof Retro014;
    }
}

export default NodeGtkGi;

