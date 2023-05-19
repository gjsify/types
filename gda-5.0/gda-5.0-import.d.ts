

import Gda50 from '@girs/gda-5.0';

declare global {
    export interface GjsGiImports {
        Gda: typeof Gda50;
    }
}

export default GjsGiImports;


