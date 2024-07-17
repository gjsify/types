
import GstCuda from './gstcuda-1.0.js';

declare global {
    export interface GjsGiImports {
        GstCuda: typeof GstCuda;
    }
}

export default GjsGiImports;


