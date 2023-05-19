

import GstRtp10 from '@girs/gstrtp-1.0';

declare global {
    export interface GjsGiImports {
        GstRtp: typeof GstRtp10;
    }
}

export default GjsGiImports;


