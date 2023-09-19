
import GdkPixdata20 from '@girs/node-gdkpixdata-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GdkPixdata', ver?: '2.0'): typeof GdkPixdata20;
    }
}

export default NodeGtkGi;

