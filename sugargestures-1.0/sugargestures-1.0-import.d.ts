import SugarGestures10 from '@girs/sugargestures-1.0';

declare global {
    export interface GjsGiImports {
        SugarGestures: typeof SugarGestures10;
    }
}

export default GjsGiImports;
