
import Cairo10 from '@girs/node-cairo-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'cairo', ver?: '1.0'): typeof Cairo10;
    }
}

export default NodeGtkGi;

