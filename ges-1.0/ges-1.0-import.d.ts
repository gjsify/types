

import GES10 from '@girs/ges-1.0';

declare global {
    export interface GjsGiImports {
        GES: typeof GES10;
    }
}

export default GjsGiImports;


