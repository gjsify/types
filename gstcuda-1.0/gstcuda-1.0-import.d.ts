
import GstCuda from './gstcuda-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GstCuda: typeof GstCuda;
    }
}

export default GjsGiImports;


