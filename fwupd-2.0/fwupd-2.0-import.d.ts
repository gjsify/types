

import Fwupd20 from '@girs/fwupd-2.0';

declare global {
    export interface GjsGiImports {
        Fwupd: typeof Fwupd20;
    }
}

export default GjsGiImports;


