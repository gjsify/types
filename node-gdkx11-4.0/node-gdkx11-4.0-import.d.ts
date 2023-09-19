
import GdkX1140 from '@girs/node-gdkx11-4.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GdkX11', ver?: '4.0'): typeof GdkX1140;
    }
}

export default NodeGtkGi;

