
import GExiv2010 from '@girs/node-gexiv2-0.10';

declare global {
    interface NodeGtkGi {
        require(ns: 'GExiv2', ver?: '0.10'): typeof GExiv2010;
    }
}

export default NodeGtkGi;

