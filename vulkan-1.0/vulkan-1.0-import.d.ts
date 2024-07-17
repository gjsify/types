
import Vulkan from './vulkan-1.0.js';

declare global {
    export interface GjsGiImports {
        Vulkan: typeof Vulkan;
    }
}

export default GjsGiImports;


