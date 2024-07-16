
import Gpseq from './gpseq-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Gpseq: typeof Gpseq;
    }
}

export default GjsGiImports;


