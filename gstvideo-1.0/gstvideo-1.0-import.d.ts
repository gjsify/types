
import GstVideo10 from '@girs/gstvideo-1.0';

declare global {
    export interface GjsGiImports {
        GstVideo: typeof GstVideo10;
    }
}

export default GjsGiImports;


