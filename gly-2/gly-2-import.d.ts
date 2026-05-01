
import type Gly2 from '@girs/gly-2';

declare global {
    export interface GjsGiImports {
        Gly: typeof Gly2;
    }
}

export default GjsGiImports;


