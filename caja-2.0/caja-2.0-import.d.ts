
import Caja from './caja-2.0.js';

declare global {
    export interface GjsGiImports {
        Caja: typeof Caja;
    }
}

export default GjsGiImports;


