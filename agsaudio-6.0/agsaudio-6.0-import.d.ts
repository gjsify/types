
import AgsAudio60 from '@girs/agsaudio-6.0';

declare global {
    export interface GjsGiImports {
        AgsAudio: typeof AgsAudio60;
    }
}

export default GjsGiImports;


