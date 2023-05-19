
import GstAllocators10 from '@girs/gstallocators-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstAllocators', ver?: '1.0'): typeof GstAllocators10;
    }
}

export default NodeGtkGi;

