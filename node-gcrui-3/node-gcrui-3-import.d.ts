
import GcrUi3 from '@girs/gcrui-3';

declare global {
    interface NodeGtkGi {
        require(ns: 'GcrUi', ver?: '3'): typeof GcrUi3;
    }
}

export default NodeGtkGi;

