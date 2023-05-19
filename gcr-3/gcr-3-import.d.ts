

import Gcr3 from '@girs/gcr-3';

declare global {
    export interface GjsGiImports {
        Gcr: typeof Gcr3;
    }
}

export default GjsGiImports;


