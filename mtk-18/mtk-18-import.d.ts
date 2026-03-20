import type Mtk18 from '@girs/mtk-18';

declare global {
    export interface GjsGiImports {
        Mtk: typeof Mtk18;
    }
}

export default GjsGiImports;
