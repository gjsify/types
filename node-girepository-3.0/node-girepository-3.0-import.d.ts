
import GIRepository30 from '@girs/node-girepository-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GIRepository', ver?: '3.0'): typeof GIRepository30;
    }
}

export default NodeGtkGi;

