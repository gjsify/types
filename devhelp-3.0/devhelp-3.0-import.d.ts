

import Devhelp30 from '@girs/devhelp-3.0';

declare global {
    export interface GjsGiImports {
        Devhelp: typeof Devhelp30;
    }
}

export default GjsGiImports;


