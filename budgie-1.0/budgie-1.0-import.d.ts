
import Budgie from './budgie-1.0.js';

declare global {
    export interface GjsGiImports {
        Budgie: typeof Budgie;
    }
}

export default GjsGiImports;


