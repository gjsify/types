
import GstFft from './gstfft-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GstFft: typeof GstFft;
    }
}

export default GjsGiImports;


