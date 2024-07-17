
import Passim from './passim-1.0.js';

declare global {
    export interface GjsGiImports {
        Passim: typeof Passim;
    }
}

export default GjsGiImports;


