import type AgsAudio80 from '@girs/agsaudio-8.0';

declare global {
    export interface GjsGiImports {
        AgsAudio: typeof AgsAudio80;
    }
}

export default GjsGiImports;
