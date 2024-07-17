
import PangoCairo from './pangocairo-1.0.js';

declare global {
    export interface GjsGiImports {
        PangoCairo: typeof PangoCairo;
    }
}

export default GjsGiImports;


