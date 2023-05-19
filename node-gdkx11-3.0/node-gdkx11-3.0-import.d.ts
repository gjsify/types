
import GdkX1130 from '@girs/gdkx11-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GdkX11', ver?: '3.0'): typeof GdkX1130;
    }
}

export default NodeGtkGi;

