
import Gst10 from '@girs/gst-1.0';


declare global {
    export interface GjsGiImports {
        Gst: typeof Gst10;
    }
}

export default GjsGiImports;


