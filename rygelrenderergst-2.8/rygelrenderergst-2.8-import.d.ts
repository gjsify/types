
import RygelRendererGst from './rygelrenderergst-2.8.js';

declare global {
    export interface GjsGiImports {
        RygelRendererGst: typeof RygelRendererGst;
    }
}

export default GjsGiImports;


