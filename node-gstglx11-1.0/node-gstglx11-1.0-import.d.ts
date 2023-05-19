
import GstGLX1110 from '@girs/gstglx11-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstGLX11', ver?: '1.0'): typeof GstGLX1110;
    }
}

export default NodeGtkGi;

