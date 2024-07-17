
import P11Kit from './p11kit-1.0.js';

declare global {
    export interface GjsGiImports {
        P11Kit: typeof P11Kit;
    }
}

export default GjsGiImports;


