
import Mbim from './mbim-1.0.js';

declare global {
    export interface GjsGiImports {
        Mbim: typeof Mbim;
    }
}

export default GjsGiImports;


