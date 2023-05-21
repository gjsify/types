
import Tepl4 from '@girs/node-tepl-4';

declare global {
    interface NodeGtkGi {
        require(ns: 'Tepl', ver?: '4'): typeof Tepl4;
    }
}

export default NodeGtkGi;

