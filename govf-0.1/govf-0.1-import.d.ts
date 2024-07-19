import Govf01 from '@girs/govf-0.1';

declare global {
    export interface GjsGiImports {
        Govf: typeof Govf01;
    }
}

export default GjsGiImports;
