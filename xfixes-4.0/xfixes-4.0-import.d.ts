
import xfixes from './xfixes-4.0.d.ts';

declare global {
    export interface GjsGiImports {
        xfixes: typeof xfixes;
    }
}

export default GjsGiImports;


