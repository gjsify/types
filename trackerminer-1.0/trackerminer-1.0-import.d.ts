
import TrackerMiner10 from '@girs/trackerminer-1.0';

declare global {
    export interface GjsGiImports {
        TrackerMiner: typeof TrackerMiner10;
    }
}

export default GjsGiImports;


