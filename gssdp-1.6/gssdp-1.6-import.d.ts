

import GSSDP16 from '@girs/gssdp-1.6';

declare global {
    export interface GjsGiImports {
        GSSDP: typeof GSSDP16;
    }
}

export default GjsGiImports;


