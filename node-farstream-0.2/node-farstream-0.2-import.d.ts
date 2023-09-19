
import Farstream02 from '@girs/node-farstream-0.2';

declare global {
    interface NodeGtkGi {
        require(ns: 'Farstream', ver?: '0.2'): typeof Farstream02;
    }
}

export default NodeGtkGi;

