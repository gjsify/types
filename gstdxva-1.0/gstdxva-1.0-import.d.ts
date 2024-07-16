
import GstDxva from './gstdxva-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GstDxva: typeof GstDxva;
    }
}

export default GjsGiImports;


