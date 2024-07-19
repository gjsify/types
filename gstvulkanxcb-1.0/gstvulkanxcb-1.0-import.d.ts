import GstVulkanXCB10 from '@girs/gstvulkanxcb-1.0';

declare global {
    export interface GjsGiImports {
        GstVulkanXCB: typeof GstVulkanXCB10;
    }
}

export default GjsGiImports;
