import Gpseq10 from '@girs/gpseq-1.0';

declare global {
    export interface GjsGiImports {
        Gpseq: typeof Gpseq10;
    }
}

export default GjsGiImports;
