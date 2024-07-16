
import Gee from './gee-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Gee: typeof Gee;
    }
}

export default GjsGiImports;


