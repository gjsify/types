
import AgsAudio from './agsaudio-6.0.js';

declare global {
    export interface GjsGiImports {
        AgsAudio: typeof AgsAudio;
    }
}

export default GjsGiImports;


