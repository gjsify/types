
import ArrowCUDA from './arrowcuda-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        ArrowCUDA: typeof ArrowCUDA;
    }
}

export default GjsGiImports;


