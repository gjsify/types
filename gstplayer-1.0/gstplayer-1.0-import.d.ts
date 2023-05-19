

import GstPlayer10 from '@girs/gstplayer-1.0';

declare global {
    export interface GjsGiImports {
        GstPlayer: typeof GstPlayer10;
    }
}

export default GjsGiImports;


