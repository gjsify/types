
import Gcr from './gcr-4.js';

declare global {
    export interface GjsGiImports {
        Gcr: typeof Gcr;
    }
}

export default GjsGiImports;


