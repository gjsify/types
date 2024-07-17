
import GstDxva10 from '@girs/gstdxva-1.0';

declare global {
    export interface GjsGiImports {
        GstDxva: typeof GstDxva10;
    }
}

export default GjsGiImports;


