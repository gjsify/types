
import PangoCairo from './pangocairo-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        PangoCairo: typeof PangoCairo;
    }
}

export default GjsGiImports;


