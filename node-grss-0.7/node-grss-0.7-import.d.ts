
import Grss07 from '@girs/node-grss-0.7';

declare global {
    interface NodeGtkGi {
        require(ns: 'Grss', ver?: '0.7'): typeof Grss07;
    }
}

export default NodeGtkGi;

