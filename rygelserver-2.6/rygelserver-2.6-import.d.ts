

import RygelServer26 from '@girs/rygelserver-2.6';

declare global {
    export interface GjsGiImports {
        RygelServer: typeof RygelServer26;
    }
}

export default GjsGiImports;


