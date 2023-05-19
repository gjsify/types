

import GstMpegts10 from '@girs/gstmpegts-1.0';

declare global {
    export interface GjsGiImports {
        GstMpegts: typeof GstMpegts10;
    }
}

export default GjsGiImports;


