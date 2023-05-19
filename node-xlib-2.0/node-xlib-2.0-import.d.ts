
import Xlib20 from '@girs/xlib-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'xlib', ver?: '2.0'): typeof Xlib20;
    }
}

export default NodeGtkGi;

