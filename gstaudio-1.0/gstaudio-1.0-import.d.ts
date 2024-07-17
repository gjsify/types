
import GstAudio from './gstaudio-1.0.js';

declare global {
    export interface GjsGiImports {
        GstAudio: typeof GstAudio;
    }
}

export default GjsGiImports;


