
import Retro1 from '@girs/retro-1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Retro', ver?: '1'): typeof Retro1;
    }
}

export default NodeGtkGi;

