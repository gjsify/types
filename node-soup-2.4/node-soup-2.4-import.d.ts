
import Soup24 from '@girs/node-soup-2.4';

declare global {
    interface NodeGtkGi {
        require(ns: 'Soup', ver?: '2.4'): typeof Soup24;
    }
}

export default NodeGtkGi;

