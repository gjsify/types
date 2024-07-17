
import GstVulkan from './gstvulkan-1.0.js';

declare global {
    export interface GjsGiImports {
        GstVulkan: typeof GstVulkan;
    }
}

export default GjsGiImports;


