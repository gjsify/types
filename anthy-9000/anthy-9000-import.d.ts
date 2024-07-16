
import Anthy from './anthy-9000.d.ts';

declare global {
    export interface GjsGiImports {
        Anthy: typeof Anthy;
    }
}

export default GjsGiImports;


