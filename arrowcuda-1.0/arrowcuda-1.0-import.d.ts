
import ArrowCUDA from './arrowcuda-1.0.js';

declare global {
    export interface GjsGiImports {
        ArrowCUDA: typeof ArrowCUDA;
    }
}

export default GjsGiImports;


