
import CoglPango from './coglpango-2.0.js';

declare global {
    export interface GjsGiImports {
        CoglPango: typeof CoglPango;
    }
}

export default GjsGiImports;


