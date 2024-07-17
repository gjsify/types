
import GstCheck from './gstcheck-1.0.js';

declare global {
    export interface GjsGiImports {
        GstCheck: typeof GstCheck;
    }
}

export default GjsGiImports;


