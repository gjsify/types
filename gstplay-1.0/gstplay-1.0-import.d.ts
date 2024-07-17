
import GstPlay from './gstplay-1.0.js';

declare global {
    export interface GjsGiImports {
        GstPlay: typeof GstPlay;
    }
}

export default GjsGiImports;


