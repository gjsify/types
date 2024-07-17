
import GCi1 from '@girs/gci-1';

declare global {
    export interface GjsGiImports {
        GCi: typeof GCi1;
    }
}

export default GjsGiImports;


