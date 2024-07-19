import Mtk15 from '@girs/mtk-15';

declare global {
    export interface GjsGiImports {
        Mtk: typeof Mtk15;
    }
}

export default GjsGiImports;
