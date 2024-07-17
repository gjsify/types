
import Anthy from './anthy-9000.js';

declare global {
    export interface GjsGiImports {
        Anthy: typeof Anthy;
    }
}

export default GjsGiImports;


