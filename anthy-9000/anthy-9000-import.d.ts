import Anthy9000 from '@girs/anthy-9000';

declare global {
    export interface GjsGiImports {
        Anthy: typeof Anthy9000;
    }
}

export default GjsGiImports;
