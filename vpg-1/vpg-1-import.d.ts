
import Vpg from './vpg-1.js';

declare global {
    export interface GjsGiImports {
        Vpg: typeof Vpg;
    }
}

export default GjsGiImports;


