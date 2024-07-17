
import GstBadAudio from './gstbadaudio-1.0.js';

declare global {
    export interface GjsGiImports {
        GstBadAudio: typeof GstBadAudio;
    }
}

export default GjsGiImports;


