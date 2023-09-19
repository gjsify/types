
import GstGLEGL10 from '@girs/node-gstglegl-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstGLEGL', ver?: '1.0'): typeof GstGLEGL10;
    }
}

export default NodeGtkGi;

