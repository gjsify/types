
import GCab10 from '@girs/node-gcab-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GCab', ver?: '1.0'): typeof GCab10;
    }
}

export default NodeGtkGi;

