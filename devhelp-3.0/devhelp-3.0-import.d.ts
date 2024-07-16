
import Devhelp from './devhelp-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        Devhelp: typeof Devhelp;
    }
}

export default GjsGiImports;


