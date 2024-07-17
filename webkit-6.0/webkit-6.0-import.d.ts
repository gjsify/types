
import WebKit from './webkit-6.0.js';

declare global {
    export interface GjsGiImports {
        WebKit: typeof WebKit;
    }
}

export default GjsGiImports;


