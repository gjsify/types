
import xfixes from './xfixes-4.0.js';

declare global {
    export interface GjsGiImports {
        xfixes: typeof xfixes;
    }
}

export default GjsGiImports;


