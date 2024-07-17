
import GstApp from './gstapp-1.0.js';

declare global {
    export interface GjsGiImports {
        GstApp: typeof GstApp;
    }
}

export default GjsGiImports;


