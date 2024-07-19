import Kkc10 from '@girs/kkc-1.0';

declare global {
    export interface GjsGiImports {
        Kkc: typeof Kkc10;
    }
}

export default GjsGiImports;
