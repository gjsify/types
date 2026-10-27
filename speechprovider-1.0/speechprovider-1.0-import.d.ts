
import type SpeechProvider10 from '@girs/speechprovider-1.0';

declare global {
    export interface GjsGiImports {
        SpeechProvider: typeof SpeechProvider10;
    }
}

export default GjsGiImports;


