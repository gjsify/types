
import Spelling from './spelling-1.js';

declare global {
    export interface GjsGiImports {
        Spelling: typeof Spelling;
    }
}

export default GjsGiImports;


