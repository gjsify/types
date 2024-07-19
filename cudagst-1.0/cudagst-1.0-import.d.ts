import CudaGst10 from '@girs/cudagst-1.0';

declare global {
    export interface GjsGiImports {
        CudaGst: typeof CudaGst10;
    }
}

export default GjsGiImports;
