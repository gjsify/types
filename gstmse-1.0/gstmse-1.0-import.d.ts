import GstMse10 from '@girs/gstmse-1.0';

declare global {
    export interface GjsGiImports {
        GstMse: typeof GstMse10;
    }
}

export default GjsGiImports;
