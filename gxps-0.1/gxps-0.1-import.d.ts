

import GXPS01 from '@girs/gxps-0.1';

declare global {
    export interface GjsGiImports {
        GXPS: typeof GXPS01;
    }
}

export default GjsGiImports;


