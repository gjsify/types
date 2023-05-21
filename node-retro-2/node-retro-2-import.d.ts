
import Retro2 from '@girs/node-retro-2';

declare global {
    interface NodeGtkGi {
        require(ns: 'Retro', ver?: '2'): typeof Retro2;
    }
}

export default NodeGtkGi;

