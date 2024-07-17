
import GCi from './gci-1.js';

declare global {
    export interface GjsGiImports {
        GCi: typeof GCi;
    }
}

export default GjsGiImports;


