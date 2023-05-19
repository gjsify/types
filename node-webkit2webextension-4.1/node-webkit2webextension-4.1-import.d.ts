
import WebKit2WebExtension41 from '@girs/webkit2webextension-4.1';

declare global {
    interface NodeGtkGi {
        require(ns: 'WebKit2WebExtension', ver?: '4.1'): typeof WebKit2WebExtension41;
    }
}

export default NodeGtkGi;

