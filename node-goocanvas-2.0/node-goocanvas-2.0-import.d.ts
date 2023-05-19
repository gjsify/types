
import GooCanvas20 from '@girs/goocanvas-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GooCanvas', ver?: '2.0'): typeof GooCanvas20;
    }
}

export default NodeGtkGi;

