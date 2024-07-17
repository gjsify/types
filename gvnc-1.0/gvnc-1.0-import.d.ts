
import GVnc from './gvnc-1.0.js';

declare global {
    export interface GjsGiImports {
        GVnc: typeof GVnc;
    }
}

export default GjsGiImports;


