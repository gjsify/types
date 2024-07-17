
import GstAudio10 from '@girs/gstaudio-1.0';

declare global {
    export interface GjsGiImports {
        GstAudio: typeof GstAudio10;
    }
}

export default GjsGiImports;


