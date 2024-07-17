
import GConf from './gconf-2.0.js';

declare global {
    export interface GjsGiImports {
        GConf: typeof GConf;
    }
}

export default GjsGiImports;


