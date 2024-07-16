
import Secret from './secret-1.d.ts';

declare global {
    export interface GjsGiImports {
        Secret: typeof Secret;
    }
}

export default GjsGiImports;


