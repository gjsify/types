
import Cally from './cally-15.d.ts';

declare global {
    export interface GjsGiImports {
        Cally: typeof Cally;
    }
}

export default GjsGiImports;


