
import Gkbd from './gkbd-3.0.js';

declare global {
    export interface GjsGiImports {
        Gkbd: typeof Gkbd;
    }
}

export default GjsGiImports;


