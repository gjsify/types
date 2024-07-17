
import Devhelp from './devhelp-3.0.js';

declare global {
    export interface GjsGiImports {
        Devhelp: typeof Devhelp;
    }
}

export default GjsGiImports;


