
import GConf20 from '@girs/gconf-2.0';


declare global {
    export interface GjsGiImports {
        GConf: typeof GConf20;
    }
}

export default GjsGiImports;


