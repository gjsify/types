
import CudaGst from './cudagst-1.0.js';

declare global {
    export interface GjsGiImports {
        CudaGst: typeof CudaGst;
    }
}

export default GjsGiImports;


