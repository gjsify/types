
import Gtd from './gtd-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Gtd: typeof Gtd;
    }
}

export default GjsGiImports;


