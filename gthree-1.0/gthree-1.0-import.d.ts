
import Gthree from './gthree-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Gthree: typeof Gthree;
    }
}

export default GjsGiImports;


