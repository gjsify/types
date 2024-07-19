import Passim10 from '@girs/passim-1.0';

declare global {
    export interface GjsGiImports {
        Passim: typeof Passim10;
    }
}

export default GjsGiImports;
