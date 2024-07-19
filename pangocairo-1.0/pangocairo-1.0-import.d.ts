import PangoCairo10 from '@girs/pangocairo-1.0';

declare global {
    export interface GjsGiImports {
        PangoCairo: typeof PangoCairo10;
    }
}

export default GjsGiImports;
