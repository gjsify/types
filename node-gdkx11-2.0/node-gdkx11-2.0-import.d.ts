
import GdkX1120 from '@girs/gdkx11-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GdkX11', ver?: '2.0'): typeof GdkX1120;
    }
}

export default NodeGtkGi;

