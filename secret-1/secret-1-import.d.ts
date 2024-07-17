
import Secret from './secret-1.js';

declare global {
    export interface GjsGiImports {
        Secret: typeof Secret;
    }
}

export default GjsGiImports;


