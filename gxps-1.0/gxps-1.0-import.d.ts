
import Gxps from './gxps-1.0.js';

declare global {
    export interface GjsGiImports {
        Gxps: typeof Gxps;
    }
}

export default GjsGiImports;


