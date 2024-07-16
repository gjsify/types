
import AgsAudio from './agsaudio-6.0.d.ts';

declare global {
    export interface GjsGiImports {
        AgsAudio: typeof AgsAudio;
    }
}

export default GjsGiImports;


