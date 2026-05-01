
import type Manette1 from '@girs/manette-1';

declare global {
    export interface GjsGiImports {
        Manette: typeof Manette1;
    }
}

export default GjsGiImports;


