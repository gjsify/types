
import Gtef from './gtef-2.d.ts';

declare global {
    export interface GjsGiImports {
        Gtef: typeof Gtef;
    }
}

export default GjsGiImports;


