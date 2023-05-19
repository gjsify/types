

import GSSDP10 from '@girs/gssdp-1.0';

declare global {
    export interface GjsGiImports {
        GSSDP: typeof GSSDP10;
    }
}

export default GjsGiImports;


