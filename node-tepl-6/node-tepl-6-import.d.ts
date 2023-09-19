
import Tepl6 from '@girs/node-tepl-6';

declare global {
    interface NodeGtkGi {
        require(ns: 'Tepl', ver?: '6'): typeof Tepl6;
    }
}

export default NodeGtkGi;

