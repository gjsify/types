
import GstTranscoder from './gsttranscoder-1.0.js';

declare global {
    export interface GjsGiImports {
        GstTranscoder: typeof GstTranscoder;
    }
}

export default GjsGiImports;


