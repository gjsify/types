

import Qmi10 from '@girs/qmi-1.0';

declare global {
    export interface GjsGiImports {
        Qmi: typeof Qmi10;
    }
}

export default GjsGiImports;


