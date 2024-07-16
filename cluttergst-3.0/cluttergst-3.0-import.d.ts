
import ClutterGst from './cluttergst-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        ClutterGst: typeof ClutterGst;
    }
}

export default GjsGiImports;


