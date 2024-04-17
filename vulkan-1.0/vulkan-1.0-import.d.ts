
import Vulkan10 from '@girs/vulkan-1.0';

declare global {
    export interface GjsGiImports {
        Vulkan: typeof Vulkan10;
    }
}

export default GjsGiImports;


