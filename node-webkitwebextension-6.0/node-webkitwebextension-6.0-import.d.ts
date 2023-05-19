
import WebKitWebExtension60 from '@girs/webkitwebextension-6.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'WebKitWebExtension', ver?: '6.0'): typeof WebKitWebExtension60;
    }
}

export default NodeGtkGi;

