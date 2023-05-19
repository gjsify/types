

import RygelRenderer26 from '@girs/rygelrenderer-2.6';

declare global {
    export interface GjsGiImports {
        RygelRenderer: typeof RygelRenderer26;
    }
}

export default GjsGiImports;


