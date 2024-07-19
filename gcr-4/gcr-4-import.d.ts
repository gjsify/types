import Gcr4 from '@girs/gcr-4';

declare global {
    export interface GjsGiImports {
        Gcr: typeof Gcr4;
    }
}

export default GjsGiImports;
