
import RygelRendererGst26 from '@girs/rygelrenderergst-2.6';

declare global {
    export interface GjsGiImports {
        RygelRendererGst: typeof RygelRendererGst26;
    }
}

export default GjsGiImports;


