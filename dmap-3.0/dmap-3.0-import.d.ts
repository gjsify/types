

import DMAP30 from '@girs/dmap-3.0';

declare global {
    export interface GjsGiImports {
        DMAP: typeof DMAP30;
    }
}

export default GjsGiImports;


