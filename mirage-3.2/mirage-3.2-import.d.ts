
import type Mirage32 from '@girs/mirage-3.2';

declare global {
    export interface GjsGiImports {
        Mirage: typeof Mirage32;
    }
}

export default GjsGiImports;


