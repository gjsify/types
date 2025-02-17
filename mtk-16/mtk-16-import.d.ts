import Mtk16 from '@girs/mtk-16';

declare global {
    export interface GjsGiImports {
        Mtk: typeof Mtk16;
    }
}

export default GjsGiImports;
