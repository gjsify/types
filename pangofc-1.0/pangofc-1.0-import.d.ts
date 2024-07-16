
import PangoFc from './pangofc-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        PangoFc: typeof PangoFc;
    }
}

export default GjsGiImports;


