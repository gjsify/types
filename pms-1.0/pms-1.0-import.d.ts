
import type Pms10 from '@girs/pms-1.0';

declare global {
    export interface GjsGiImports {
        Pms: typeof Pms10;
    }
}

export default GjsGiImports;


