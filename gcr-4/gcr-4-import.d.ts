
import Gcr from './gcr-4.d.ts';

declare global {
    export interface GjsGiImports {
        Gcr: typeof Gcr;
    }
}

export default GjsGiImports;


