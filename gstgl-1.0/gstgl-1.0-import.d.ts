
import GstGL from './gstgl-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GstGL: typeof GstGL;
    }
}

export default GjsGiImports;


