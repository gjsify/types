
import Soup30 from '@girs/soup-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Soup', ver?: '3.0'): typeof Soup30;
    }
}

export default NodeGtkGi;

