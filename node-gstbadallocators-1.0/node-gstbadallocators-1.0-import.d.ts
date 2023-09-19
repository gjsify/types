
import GstBadAllocators10 from '@girs/node-gstbadallocators-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstBadAllocators', ver?: '1.0'): typeof GstBadAllocators10;
    }
}

export default NodeGtkGi;

