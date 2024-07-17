
import GstCodecs from './gstcodecs-1.0.js';

declare global {
    export interface GjsGiImports {
        GstCodecs: typeof GstCodecs;
    }
}

export default GjsGiImports;


