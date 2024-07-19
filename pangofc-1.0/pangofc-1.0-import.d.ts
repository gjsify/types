import PangoFc10 from '@girs/pangofc-1.0';

declare global {
    export interface GjsGiImports {
        PangoFc: typeof PangoFc10;
    }
}

export default GjsGiImports;
