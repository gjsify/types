
import GdkPixbuf20 from '@girs/gdkpixbuf-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GdkPixbuf', ver?: '2.0'): typeof GdkPixbuf20;
    }
}

export default NodeGtkGi;

