
import Tepl5 from '@girs/node-tepl-5';

declare global {
    interface NodeGtkGi {
        require(ns: 'Tepl', ver?: '5'): typeof Tepl5;
    }
}

export default NodeGtkGi;

