import Dex1 from '@girs/dex-1';

declare global {
    export interface GjsGiImports {
        Dex: typeof Dex1;
    }
}

export default GjsGiImports;
