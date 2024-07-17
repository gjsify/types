
import Bamf from './bamf-3.js';

declare global {
    export interface GjsGiImports {
        Bamf: typeof Bamf;
    }
}

export default GjsGiImports;


