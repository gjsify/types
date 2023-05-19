

import NMClient10 from '@girs/nmclient-1.0';

declare global {
    export interface GjsGiImports {
        NMClient: typeof NMClient10;
    }
}

export default GjsGiImports;


