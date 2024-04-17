
import RygelRendererGst28 from '@girs/rygelrenderergst-2.8';

declare global {
    export interface GjsGiImports {
        RygelRendererGst: typeof RygelRendererGst28;
    }
}

export default GjsGiImports;


