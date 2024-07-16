
import CudaGst from './cudagst-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        CudaGst: typeof CudaGst;
    }
}

export default GjsGiImports;


