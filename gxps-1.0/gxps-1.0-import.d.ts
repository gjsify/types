
import Gxps from './gxps-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Gxps: typeof Gxps;
    }
}

export default GjsGiImports;


