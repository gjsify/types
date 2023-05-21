
import GFBGraph03 from '@girs/node-gfbgraph-0.3';

declare global {
    interface NodeGtkGi {
        require(ns: 'GFBGraph', ver?: '0.3'): typeof GFBGraph03;
    }
}

export default NodeGtkGi;

