
import Gst from './gst-1.0.js';

declare global {
    export interface GjsGiImports {
        Gst: typeof Gst;
    }
}

export default GjsGiImports;


