
import TrackerMiner20 from '@girs/trackerminer-2.0';

declare global {
    export interface GjsGiImports {
        TrackerMiner: typeof TrackerMiner20;
    }
}

export default GjsGiImports;


