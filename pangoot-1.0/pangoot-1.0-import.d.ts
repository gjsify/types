

import PangoOT10 from '@girs/pangoot-1.0';

declare global {
    export interface GjsGiImports {
        PangoOT: typeof PangoOT10;
    }
}

export default GjsGiImports;


