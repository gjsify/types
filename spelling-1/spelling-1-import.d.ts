
import Spelling from './spelling-1.d.ts';

declare global {
    export interface GjsGiImports {
        Spelling: typeof Spelling;
    }
}

export default GjsGiImports;


