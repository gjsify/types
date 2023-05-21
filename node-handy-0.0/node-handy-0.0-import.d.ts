
import Handy00 from '@girs/node-handy-0.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Handy', ver?: '0.0'): typeof Handy00;
    }
}

export default NodeGtkGi;

