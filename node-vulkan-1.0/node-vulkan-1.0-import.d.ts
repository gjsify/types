
import Vulkan10 from '@girs/vulkan-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Vulkan', ver?: '1.0'): typeof Vulkan10;
    }
}

export default NodeGtkGi;

