
import Farstream01 from '@girs/node-farstream-0.1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Farstream', ver?: '0.1'): typeof Farstream01;
    }
}

export default NodeGtkGi;

