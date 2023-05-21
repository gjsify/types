
import Handy1 from '@girs/node-handy-1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Handy', ver?: '1'): typeof Handy1;
    }
}

export default NodeGtkGi;

