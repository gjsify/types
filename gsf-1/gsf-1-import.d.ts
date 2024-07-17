
import Gsf from './gsf-1.js';

declare global {
    export interface GjsGiImports {
        Gsf: typeof Gsf;
    }
}

export default GjsGiImports;


