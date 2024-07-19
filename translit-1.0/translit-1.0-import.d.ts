import Translit10 from '@girs/translit-1.0';

declare global {
    export interface GjsGiImports {
        Translit: typeof Translit10;
    }
}

export default GjsGiImports;
