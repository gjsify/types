import GstCuda10 from '@girs/gstcuda-1.0';

declare global {
    export interface GjsGiImports {
        GstCuda: typeof GstCuda10;
    }
}

export default GjsGiImports;
