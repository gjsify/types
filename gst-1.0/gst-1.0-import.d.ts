
import Gst from './gst-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Gst: typeof Gst;
    }
}

export default GjsGiImports;


