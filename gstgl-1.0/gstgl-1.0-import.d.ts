

import GstGL10 from '@girs/gstgl-1.0';

declare global {
    export interface GjsGiImports {
        GstGL: typeof GstGL10;
    }
}

export default GjsGiImports;


