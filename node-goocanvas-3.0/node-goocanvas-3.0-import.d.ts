
import GooCanvas30 from '@girs/node-goocanvas-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GooCanvas', ver?: '3.0'): typeof GooCanvas30;
    }
}

export default NodeGtkGi;

