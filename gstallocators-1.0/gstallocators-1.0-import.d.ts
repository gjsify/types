
import GstAllocators from './gstallocators-1.0.js';

declare global {
    export interface GjsGiImports {
        GstAllocators: typeof GstAllocators;
    }
}

export default GjsGiImports;


