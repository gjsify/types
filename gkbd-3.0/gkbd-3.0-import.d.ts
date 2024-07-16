
import Gkbd from './gkbd-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        Gkbd: typeof Gkbd;
    }
}

export default GjsGiImports;


