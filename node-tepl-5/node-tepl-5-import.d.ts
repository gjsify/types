
import Tepl5 from '@girs/tepl-5';

declare global {
    interface NodeGtkGi {
        require(ns: 'Tepl', ver?: '5'): typeof Tepl5;
    }
}

export default NodeGtkGi;

