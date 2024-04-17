
import Nice01 from '@girs/nice-0.1';

declare global {
    export interface GjsGiImports {
        Nice: typeof Nice01;
    }
}

export default GjsGiImports;


