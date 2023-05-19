
import GstGLWayland10 from '@girs/gstglwayland-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstGLWayland', ver?: '1.0'): typeof GstGLWayland10;
    }
}

export default NodeGtkGi;

