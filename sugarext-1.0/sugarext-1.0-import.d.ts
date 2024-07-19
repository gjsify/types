import SugarExt10 from '@girs/sugarext-1.0';

declare global {
    export interface GjsGiImports {
        SugarExt: typeof SugarExt10;
    }
}

export default GjsGiImports;
