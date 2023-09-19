
import WebKitWebProcessExtension60 from '@girs/node-webkitwebprocessextension-6.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'WebKitWebProcessExtension', ver?: '6.0'): typeof WebKitWebProcessExtension60;
    }
}

export default NodeGtkGi;

