

import GSSDP12 from '@girs/gssdp-1.2';

declare global {
    export interface GjsGiImports {
        GSSDP: typeof GSSDP12;
    }
}

export default GjsGiImports;


