
import GstGLEGL10 from '@girs/gstglegl-1.0';


declare global {
    export interface GjsGiImports {
        GstGLEGL: typeof GstGLEGL10;
    }
}

export default GjsGiImports;


