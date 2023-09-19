
import GIRepository20 from '@girs/node-girepository-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GIRepository', ver?: '2.0'): typeof GIRepository20;
    }
}

export default NodeGtkGi;

