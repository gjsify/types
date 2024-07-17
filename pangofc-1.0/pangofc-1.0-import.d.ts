
import PangoFc from './pangofc-1.0.js';

declare global {
    export interface GjsGiImports {
        PangoFc: typeof PangoFc;
    }
}

export default GjsGiImports;


