
import GstVulkan10 from '@girs/gstvulkan-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstVulkan', ver?: '1.0'): typeof GstVulkan10;
    }
}

export default NodeGtkGi;

