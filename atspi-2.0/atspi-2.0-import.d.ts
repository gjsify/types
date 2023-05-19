

import Atspi20 from '@girs/atspi-2.0';

declare global {
    export interface GjsGiImports {
        Atspi: typeof Atspi20;
    }
}

export default GjsGiImports;


