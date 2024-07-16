
import GVnc from './gvnc-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GVnc: typeof GVnc;
    }
}

export default GjsGiImports;


