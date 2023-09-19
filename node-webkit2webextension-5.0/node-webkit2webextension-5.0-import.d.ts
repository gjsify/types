
import WebKit2WebExtension50 from '@girs/node-webkit2webextension-5.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'WebKit2WebExtension', ver?: '5.0'): typeof WebKit2WebExtension50;
    }
}

export default NodeGtkGi;

