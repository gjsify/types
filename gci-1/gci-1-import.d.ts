
import GCi from './gci-1.d.ts';

declare global {
    export interface GjsGiImports {
        GCi: typeof GCi;
    }
}

export default GjsGiImports;


