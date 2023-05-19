
import WebKit2WebExtension40 from '@girs/webkit2webextension-4.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'WebKit2WebExtension', ver?: '4.0'): typeof WebKit2WebExtension40;
    }
}

export default NodeGtkGi;

