
import Gpseq from './gpseq-1.0.js';

declare global {
    export interface GjsGiImports {
        Gpseq: typeof Gpseq;
    }
}

export default GjsGiImports;


