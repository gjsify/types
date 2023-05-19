
import GFBGraph02 from '@girs/gfbgraph-0.2';

declare global {
    interface NodeGtkGi {
        require(ns: 'GFBGraph', ver?: '0.2'): typeof GFBGraph02;
    }
}

export default NodeGtkGi;

