
import fontconfig from './fontconfig-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        fontconfig: typeof fontconfig;
    }
}

export default GjsGiImports;


