
import Xft20 from '@girs/node-xft-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'xft', ver?: '2.0'): typeof Xft20;
    }
}

export default NodeGtkGi;

