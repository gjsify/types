
import Cally from './cally-15.js';

declare global {
    export interface GjsGiImports {
        Cally: typeof Cally;
    }
}

export default GjsGiImports;


