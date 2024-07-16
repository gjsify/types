
import P11Kit from './p11kit-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        P11Kit: typeof P11Kit;
    }
}

export default GjsGiImports;


