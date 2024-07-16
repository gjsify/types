
import CoglPango from './coglpango-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        CoglPango: typeof CoglPango;
    }
}

export default GjsGiImports;


