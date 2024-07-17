
import ClutterGst from './cluttergst-3.0.js';

declare global {
    export interface GjsGiImports {
        ClutterGst: typeof ClutterGst;
    }
}

export default GjsGiImports;


