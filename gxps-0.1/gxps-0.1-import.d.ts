
import GXPS from './gxps-0.1.js';

declare global {
    export interface GjsGiImports {
        GXPS: typeof GXPS;
    }
}

export default GjsGiImports;


