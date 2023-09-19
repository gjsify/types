
import ArrowDataset10 from '@girs/node-arrowdataset-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'ArrowDataset', ver?: '1.0'): typeof ArrowDataset10;
    }
}

export default NodeGtkGi;

