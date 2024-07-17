
import Gtef from './gtef-2.js';

declare global {
    export interface GjsGiImports {
        Gtef: typeof Gtef;
    }
}

export default GjsGiImports;


