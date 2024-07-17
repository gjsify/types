
import Gda from './gda-6.0.js';

declare global {
    export interface GjsGiImports {
        Gda: typeof Gda;
    }
}

export default GjsGiImports;


