

import GstRtsp10 from '@girs/gstrtsp-1.0';

declare global {
    export interface GjsGiImports {
        GstRtsp: typeof GstRtsp10;
    }
}

export default GjsGiImports;


