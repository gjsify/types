
import GstMpegts from './gstmpegts-1.0.js';

declare global {
    export interface GjsGiImports {
        GstMpegts: typeof GstMpegts;
    }
}

export default GjsGiImports;


