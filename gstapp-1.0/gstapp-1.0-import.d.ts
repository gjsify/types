
import GstApp from './gstapp-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GstApp: typeof GstApp;
    }
}

export default GjsGiImports;


