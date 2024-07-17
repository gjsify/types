
import GstVulkan10 from '@girs/gstvulkan-1.0';

declare global {
    export interface GjsGiImports {
        GstVulkan: typeof GstVulkan10;
    }
}

export default GjsGiImports;


