
import Caja from './caja-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        Caja: typeof Caja;
    }
}

export default GjsGiImports;


