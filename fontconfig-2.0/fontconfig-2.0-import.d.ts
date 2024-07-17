
import fontconfig from './fontconfig-2.0.js';

declare global {
    export interface GjsGiImports {
        fontconfig: typeof fontconfig;
    }
}

export default GjsGiImports;


