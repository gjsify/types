import GstTranscoder10 from '@girs/gsttranscoder-1.0';

declare global {
    export interface GjsGiImports {
        GstTranscoder: typeof GstTranscoder10;
    }
}

export default GjsGiImports;
