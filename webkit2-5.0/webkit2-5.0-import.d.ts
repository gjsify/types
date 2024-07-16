
import WebKit2 from './webkit2-5.0.d.ts';

declare global {
    export interface GjsGiImports {
        WebKit2: typeof WebKit2;
    }
}

export default GjsGiImports;


