
import GdkWayland40 from '@girs/node-gdkwayland-4.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GdkWayland', ver?: '4.0'): typeof GdkWayland40;
    }
}

export default NodeGtkGi;

