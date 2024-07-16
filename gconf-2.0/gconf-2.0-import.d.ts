
import GConf from './gconf-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        GConf: typeof GConf;
    }
}

export default GjsGiImports;


