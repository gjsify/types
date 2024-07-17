
import WebKit2WebExtension from './webkit2webextension-5.0.js';

declare global {
    export interface GjsGiImports {
        WebKit2WebExtension: typeof WebKit2WebExtension;
    }
}

export default GjsGiImports;


