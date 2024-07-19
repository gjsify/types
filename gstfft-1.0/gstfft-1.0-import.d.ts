import GstFft10 from '@girs/gstfft-1.0';

declare global {
    export interface GjsGiImports {
        GstFft: typeof GstFft10;
    }
}

export default GjsGiImports;
