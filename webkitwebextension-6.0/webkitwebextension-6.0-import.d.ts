
import WebKitWebExtension from './webkitwebextension-6.0.js';

declare global {
    export interface GjsGiImports {
        WebKitWebExtension: typeof WebKitWebExtension;
    }
}

export default GjsGiImports;


