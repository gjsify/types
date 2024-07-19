import ArrowCUDA10 from '@girs/arrowcuda-1.0';

declare global {
    export interface GjsGiImports {
        ArrowCUDA: typeof ArrowCUDA10;
    }
}

export default GjsGiImports;
